/* eslint-disable no-console */
import queryString from 'query-string';
import { v4 as uuid } from 'uuid';

let image: HTMLImageElement | null;

export class BaseTrack {
    private static serverUrl: string =
        'https://zhusun.cn-beijing.log.aliyuncs.com/logstores/zhusun-online/track_ua.gif?APIVersion=0.6.0&';

    public static track(params: { [key: string]: any }) {
        try {
            if (process.env.NODE_ENV !== 'production') {
                // 非生产环境不上报
                return;
            }
            const qs = queryString.stringify({
                timestamp: Date.now(),
                traceId: this.getTraceId(),
                url: location.href,
                ...params
            });
            this.reportByImg(qs);
        } catch (e) {
            console.error(e);
        }
    }

    private static reportByImg(qs: string, retryTimes: number = 3) {
        const retry = () => {
            image = null;
            retryTimes && this.reportByImg(qs, retryTimes - 1);
        };
        return new Promise(resolve => {
            try {
                image = new Image();
                image.src = this.serverUrl + qs;

                image.onerror = () => {
                    retry();
                };
            } catch (e) {
                console.error(e);
            }
        });
    }

    private static getTraceId() {
        try {
            const traceKey = 'yfd_track_id';
            let traceId = localStorage.getItem(traceKey);
            if (!traceId) {
                traceId = uuid();
                localStorage.setItem(traceKey, traceId!);
            }
            return traceId;
        } catch (e) {
            return '';
        }
    }
}
