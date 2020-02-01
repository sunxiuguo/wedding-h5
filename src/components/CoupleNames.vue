<template>
    <ul class="names" :class="size">
        <li :class="nameClass">{{ maleName }}</li>
        <li class="circle" :class="size">&</li>
        <li :class="nameClass">{{ femaleName }}</li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommonConfig from '../const/commonConfig';

type CoupleSize = 'small' | 'medium' | 'large';

@Component
export default class MainHeadSection extends Vue {
    @Prop({ default: 'large' }) size!: CoupleSize;
    @Prop({ default: false }) showAnimate!: boolean;

    maleName = CommonConfig.maleLastName + CommonConfig.maleFirstName;
    femaleName = CommonConfig.femaleLastName + CommonConfig.femaleFirstName;

    targetIntersectionObserver: IntersectionObserver | null = null;

    get nameClass() {
        return this.showAnimate ? 'animate-name' : '';
    }

    observeTimeBadge(index: number) {
        const target = document.getElementsByClassName(this.nameClass)[index];

        if (!target) {
            return;
        }

        this.targetIntersectionObserver = new IntersectionObserver(entries => {
            const { isIntersecting, intersectionRatio, boundingClientRect } = entries[0];
            const targetIsVisible = isIntersecting && intersectionRatio >= 0;

            const delay = `delay-0.5s`;
            const animateName = index % 2 === 0 ? 'bounceInLeft' : 'bounceInRight';
            if (targetIsVisible) {
                target.classList.add('animated', animateName, delay);
            } else if (boundingClientRect.bottom < 0) {
                target.classList.remove('animated', animateName, delay);
            }
        });

        this.targetIntersectionObserver.observe(target);
    }

    mounted() {
        if (!this.showAnimate) {
            return;
        }
        const count = document.getElementsByClassName(this.nameClass).length;
        for (let i = 0; i < count; i++) {
            this.observeTimeBadge(i);
        }
    }
}
</script>
<style scoped lang="less">
ul.names {
    li {
        display: inline-block;
    }

    list-style: none;
    display: inline;
    font-weight: 300;
    padding: 0px;

    &.large {
        font-size: 100px;
    }

    &.medium {
        font-size: 43px;
    }

    &.small {
        font-size: 30px;
    }
}

.circle {
    margin: 0 20px;
    background: #f9667e;
    text-align: center;
    font-weight: normal;
    border-radius: 50%;
    color: #fff;
    position: relative;

    &.large {
        width: 100px;
        height: 100px;
        font-size: 63px;
        line-height: 1.5em;
        top: -15px;
    }

    &.medium {
        width: 64px;
        height: 64px;
        font-size: 41px;
        line-height: 1.5em;
        top: 0px;
    }

    &.small {
        width: 20px;
        height: 20px;
        font-size: 13px;
        top: -5px;
    }
}
</style>
