/* eslint-disable no-console */
import { VueRouter } from 'vue-router/types/router';

export class Performance {
    // TODO 注意上报的单位 现在是毫秒
    public static readonly timing = window.performance && window.performance.timing;

    public static init() {
        if (!this.timing) {
            console.warn('当前浏览器不支持performance API');
            return;
        }

        window.addEventListener('load', () => {});
    }

    public static record(router?: VueRouter) {
        const setFPT = () => {
            if (window.performance && window.performance.now) {
                this.customFPT = window.performance.now();
            }
        };
        return {
            created: () => {
                if (router) {
                    router.onReady(() => {
                        setFPT();
                    });
                } else {
                    setFPT();
                }
            }
        };
    }

    private static customFPT: number = 0;

    public static getTimings(): { [key in string]: number } {
        if (!this.timing) {
            console.warn('当前浏览器不支持performance API');
            return {};
        }

        return {
            // redirect: this.getRedirectTime(),
            // dns: this.getDnsTime(),
            // tcp: this.getTcpTime(),
            // ttfb: this.getTimeOfFirstByte(),
            // req: this.getReqTime(),
            // ppdt: this.getParsePureDomTime(),
            // dclt: this.getDomContentLoadTime(),
            // fpt: this.getFirstPaintTime(),
            load: this.getLoadTime()
        };
    }

    private static getRedirectTime() {
        // 重定向耗时
        return Performance.timing.redirectEnd - Performance.timing.redirectStart;
    }

    private static getDnsTime() {
        // dns查询耗时
        return Performance.timing.domainLookupEnd - Performance.timing.domainLookupStart;
    }

    private static getTcpTime() {
        // tcp连接耗时
        return Performance.timing.connectEnd - Performance.timing.connectStart;
    }

    private static getTimeOfFirstByte() {
        // 读取页面第一个字节耗时
        return Performance.timing.responseStart - Performance.timing.navigationStart;
    }

    private static getReqTime() {
        // request请求耗时
        return Performance.timing.responseEnd - Performance.timing.responseStart;
    }

    private static getParsePureDomTime() {
        // 解析纯DOM树耗时, 不包含js css等资源的加载和执行
        return Performance.timing.domInteractive - Performance.timing.domLoading;
    }

    private static getDomContentLoadTime() {
        // 页面资源加载耗时, 包含vue, js css等资源的加载和执行
        return Performance.timing.domComplete - Performance.timing.domInteractive;
    }

    private static getFirstPaintTime() {
        // first paint time, 首次渲染时间, 即白屏时间
        return Math.round(
            (window.performance.getEntriesByName &&
                window.performance.getEntriesByName('first-paint') &&
                window.performance.getEntriesByName('first-paint')[0] &&
                window.performance.getEntriesByName('first-paint')[0].startTime) ||
                this.customFPT
        );
    }

    private static getLoadTime() {
        // 页面load总耗时
        return Performance.timing.loadEventStart - Performance.timing.navigationStart;
    }

    private static toSeconds(time: number) {}
}
