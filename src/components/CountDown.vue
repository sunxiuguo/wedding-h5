<template>
    <section id="count-down">
        <h2>让我们为这一天的到来开始计时！</h2>
        <div class="container" id="count-down-container">
            <div class="countdown-circle">
                <h4>天</h4>
                <span>{{ days }}</span>
            </div>
            <div class="countdown-circle">
                <h4>时</h4>
                <span>{{ hours }}</span>
            </div>
            <div class="countdown-circle">
                <h4>分</h4>
                <span>{{ miniutes }}</span>
            </div>
            <div class="countdown-circle">
                <h4>秒</h4>
                <span>{{ seconds }}</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DateFormat } from '../utils/dateFormat';

@Component
export default class CountDown extends Vue {
    days: string = '';
    hours: string = '';
    miniutes: string = '';
    seconds: string = '';
    timer: any = null;
    currentTime: number = Date.now();

    timeInterval = 1000;
    weddingStartTime = new Date('2020/12/03 10:00:00').getTime();

    targetIntersectionObserver: IntersectionObserver | null = null;

    created() {
        this.currentTime = this.getServerTime();
        this.timer = setTimeout(this.countDown, this.timeInterval);
    }

    countDown() {
        const leftTime = Math.max(this.weddingStartTime - this.currentTime, 0);
        this.currentTime = this.currentTime + this.timeInterval;
        this.timestampToCountDown(leftTime);
        if (leftTime <= 0) {
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
        this.days = DateFormat.toTwoDigit(Math.floor(t / 60 / 60 / 24));
        this.hours = DateFormat.toTwoDigit(Math.floor((t / 60 / 60) % 24));
        this.miniutes = DateFormat.toTwoDigit(Math.floor((t / 60) % 60));
        this.seconds = DateFormat.toTwoDigit(Math.floor(t % 60));
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

        const delay = `delay-${index}s`;

        new IntersectionObserver(entries => {
            const { isIntersecting, intersectionRatio } = entries[0];
            const targetIsVisible = isIntersecting && intersectionRatio >= 0;

            if (targetIsVisible) {
                target.classList.add('animated', 'bounceInDown', delay, 'faster');
            } else {
                target.classList.remove('animated', 'bounceInDown', delay, 'faster');
            }
        }).observe(document.querySelector('#count-down-container')!);
    }

    getAllCircleClass() {
        return document.getElementsByClassName('countdown-circle');
    }

    mounted() {
        const count = this.getAllCircleClass().length;
        for (let i = 0; i < count; i++) {
            this.observeTimeBadge(i);
        }
    }
}
</script>
<style scoped lang="less">
#count-down {
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

        .countdown-circle {
            border-radius: 50%;
            border: 1px solid #7b7571;
            color: #7b7571;
            width: 150px;
            height: 150px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h4 {
                font-size: 25px;
            }
            span {
                font-size: 39px;
                font-weight: bold;
            }
        }
    }
}
</style>
