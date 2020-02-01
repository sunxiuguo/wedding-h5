<template>
    <section id="card-count-down">
        <h2>让我们为这一天的到来开始计时！</h2>
        <div class="container" id="count-down-container">
            <div class="flip-container" v-for="(number, index) of fullDateString" :key="index">
                <div class="flip down">
                    <div class="digital front" data-number="0"></div>
                    <div class="digital back" data-number="1"></div>
                </div>
                <p class="font-divider" v-if="getQuantifier(index)">{{ getQuantifier(index) }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DateFormat } from '../utils/dateFormat';
import { Flipper } from '../utils/flipper';

@Component
export default class CardCountDown extends Vue {
    timer: any = null;
    currentTime: number = Date.now();

    days: string = '';
    hours: string = '';
    miniutes: string = '';
    seconds: string = '';
    weddingStartTime = new Date('2020/12/03 10:00:00').getTime();
    fullDateString: string = this.timestampToCountDown(this.weddingStartTime - Date.now())!;
    timeInterval = 1000;

    filpElementList: NodeListOf<Element> | null = null;
    fillpers: Flipper[] = [];
    targetIntersectionObserver: IntersectionObserver | null = null;

    mounted() {
        this.currentTime = this.getServerTime();
        this.filpElementList = document.querySelectorAll('.flip');
        const currentTime = this.timestampToCountDown(this.weddingStartTime - this.currentTime)!;
        const nextTime = this.timestampToCountDown(this.weddingStartTime - this.currentTime - 1000)!;
        this.fillpers = Array.from(this.filpElementList).map(
            (flip, i) => new Flipper(flip, currentTime[i], nextTime[i], 'go')
        );
        this.timer = setTimeout(this.countDown, this.timeInterval);

        const count = this.getAllCircleClass().length;
        for (let i = 0; i < count; i++) {
            this.observeTimeBadge(i);
        }
    }

    getQuantifier(index: number) {
        switch (index) {
            case 2:
                return '天';
            case 4:
                return '时';
            case 6:
                return '分';
            case 8:
                return '秒';
            default:
                return '';
        }
    }

    countDown() {
        const oldLeftTime = Math.max(this.weddingStartTime - this.currentTime, 0);
        this.currentTime = this.currentTime + this.timeInterval;
        const nextLeftTime = Math.max(this.weddingStartTime - this.currentTime, 0);
        const oldTimeStr = this.timestampToCountDown(oldLeftTime)!;
        const nextTimeStr = this.timestampToCountDown(nextLeftTime)!;
        for (let i = 0; i < this.fillpers.length; i++) {
            if (oldTimeStr[i] === nextTimeStr[i]) {
                continue;
            }
            this.fillpers[i].flipDown(oldTimeStr[i], nextTimeStr[i]);
        }
        if (this.weddingStartTime - this.currentTime <= 0) {
            this.countUp();
        } else {
            this.timer = setTimeout(this.countDown, this.timeInterval);
        }
    }

    countUp() {
        const upTime = Math.max(this.currentTime - this.weddingStartTime, 0);
        this.timestampToCountDown(upTime);
        this.timer = setTimeout(this.countUp, this.timeInterval);
    }

    timestampToCountDown(time: number) {
        if (!time) {
            return;
        }
        const timeSeconds = Math.floor(time / 1000);
        const t = Math.max(timeSeconds, 0);
        this.days = DateFormat.toThreeDigit(Math.floor(t / 60 / 60 / 24));
        this.hours = DateFormat.toTwoDigit(Math.floor((t / 60 / 60) % 24));
        this.miniutes = DateFormat.toTwoDigit(Math.floor((t / 60) % 60));
        this.seconds = DateFormat.toTwoDigit(Math.floor(t % 60));
        this.fullDateString = this.days + this.hours + this.miniutes + this.seconds;
        return this.fullDateString;
    }

    getServerTime() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', '/', false);
        xhr.send(null);
        var date = xhr.getResponseHeader('Date')!;
        return new Date(date).getTime();
    }

    clearTimer() {
        clearTimeout(this.timer);
        this.timer = null;
    }

    observeTimeBadge(index: number) {
        const target = this.getAllCircleClass()[index];

        if (!target) {
            return;
        }

        let delay: string = 'delay-1s';

        // 统一delay1s 否则出现太慢了
        // switch (index) {
        //     case 0:
        //     case 1:
        //     case 2:
        //         delay = 'delay-0s';
        //         break;
        //     case 3:
        //     case 4:
        //         delay = 'delay-1s';
        //         break;
        //     case 5:
        //     case 6:
        //         delay = 'delay-2s';
        //         break;
        //     case 7:
        //     case 8:
        //         delay = 'delay-3s';
        //         break;
        // }

        new IntersectionObserver(entries => {
            const { isIntersecting, intersectionRatio } = entries[0];
            const targetIsVisible = isIntersecting && intersectionRatio >= 0;

            if (targetIsVisible) {
                target.classList.add('animated', 'bounceInDown', delay, 'faster');
            } else {
                target.classList.remove('animated', 'bounceInDown', delay, 'faster');
            }
        }).observe(document.querySelector('#card-count-down')!);
    }

    getAllCircleClass() {
        return document.getElementsByClassName('flip-container');
    }
}
</script>
<style scoped lang="less">
#card-count-down {
    @common-perspective: 160px;
    text-align: center;
    position: relative;

    background: url('https://cdn.zhusun.club/image/wedding/bg-3.jpg') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #7b7571;

    padding: 120px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .container {
        width: 60%;
        padding: 25px 0;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .flip-container {
        display: inline-block;
    }

    .font-divider {
        display: inline-block;
        margin: 0 10px;
        font-size: 20px;
        color: #666;
    }

    .flip {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 100px;
        line-height: 100px;
        border: solid 1px #000;
        border-radius: 10px;
        background: #fff;
        font-size: 66px;
        color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-family: 'Helvetica Neue';
        margin: 2px;

        .digital {
            &::before,
            &::after {
                content: attr(data-number);
                left: 0;
                right: 0;
                position: absolute;
                background: #000;
                overflow: hidden;
                box-sizing: border-box;
            }

            &::before {
                top: 0;
                bottom: 50%;
                border-radius: 10px 10px 0 0;
                border-bottom: 1px solid #666;
            }

            &::after {
                bottom: 0;
                top: 50%;
                border-radius: 0 0 10px 10px;
                line-height: 0;
            }
        }

        &.down {
            .front::after,
            .back::before {
                z-index: 1;
            }

            .back::after {
                z-index: 2;
                transform-origin: 50% 0%;
                transform: perspective(@common-perspective) rotateX(180deg);
                perspective-origin: 50% 50%;
            }

            .front::before {
                z-index: 3;
            }

            &.go {
                .front::before {
                    transform-origin: 50% 100%;
                    animation: frontFlipDown 0.6s ease-in-out both;
                    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
                    backface-visibility: hidden;
                }

                .back::after {
                    animation: backFlipDown 0.6s ease-in-out both;
                }
            }
        }

        &.up {
            .front::before,
            .back::after {
                z-index: 1;
            }

            .back::before {
                z-index: 2;
                transform-origin: 50% 100%;
                transform: perspective(@common-perspective) rotateX(-180deg);
                perspective-origin: 50% 50%;
            }

            .front::after {
                z-index: 3;
            }

            &.go {
                .front::after {
                    transform-origin: 50% 0%;
                    animation: frontFlipUp 0.6s ease-in-out both;
                    box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
                    backface-visibility: hidden;
                }

                .back::before {
                    animation: backFlipUp 0.6s ease-in-out both;
                }
            }
        }
    }

    @keyframes frontFlipDown {
        0% {
            transform: perspective(@common-perspective) rotateX(0deg);
        }

        100% {
            transform: perspective(@common-perspective) rotateX(-180deg);
        }
    }

    @keyframes backFlipDown {
        0% {
            transform: perspective(@common-perspective) rotateX(180deg);
        }

        100% {
            transform: perspective(@common-perspective) rotateX(0deg);
        }
    }

    @keyframes frontFlipUp {
        0% {
            transform: perspective(@common-perspective) rotateX(0deg);
        }

        100% {
            transform: perspective(@common-perspective) rotateX(180deg);
        }
    }

    @keyframes backFlipUp {
        0% {
            transform: perspective(@common-perspective) rotateX(-180deg);
        }

        100% {
            transform: perspective(@common-perspective) rotateX(0deg);
        }
    }
}
</style>
