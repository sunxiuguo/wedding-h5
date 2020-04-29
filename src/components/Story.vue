<template>
    <section id="story">
        <div class="container">
            <div class="row">
                <h1>
                    我们的
                    <span>故事</span>
                </h1>
                <div class="divider"></div>
                <p>
                    <em>
                        这是我们认识的时间线，我们故事的开始。
                    </em>
                </p>
            </div>
            <ul class="timeline">
                <li
                    v-for="(story, index) in storyList"
                    :key="index"
                    :class="{ 'timeline-inverted': index % 2 !== 0 }"
                    @click="toDetail(index)"
                >
                    <div class="timeline-badge" :id="`timeLineBadge${index}`">
                        <i class="fa fa-heart animated heartBeat"></i>
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h2 class="timeline-title">
                                {{ story.year }}
                                <span>
                                    {{ story.month }}
                                </span>
                                {{ story.day || '' }}
                            </h2>
                        </div>
                        <div class="timeline-body text-center">
                            <img :src="story.imgSrc" alt="Our Story" class="img-responsive" />
                            <h2 class="timeline-title">
                                {{ story.title }}
                            </h2>
                            <p>
                                {{ story.desc || '' }}
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="timeline-end">
                        <div class="timeline-badge">
                            <i class="fa fa-heart animated heartBeat"> </i>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="story-footer">
                现在我们终于要步入了
                <span>
                    下一阶段...
                </span>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommonConfig from '../const/commonConfig';

enum AnimateName {
    LEFT_IN = 'bounceInLeft',
    LEFT_OUT = 'bounceOutLeft',
    RIGHT_IN = 'bounceInRight',
    RIGHT_OUT = 'bounceOutRight'
}

@Component
export default class Story extends Vue {
    targetIntersectionObserver: IntersectionObserver[] = [];
    storyList: any[] = CommonConfig.storyList;

    toDetail(index: string) {
        this.$router.push({
            path: '/story',
            query: { id: index }
        });
    }

    observeTimeBadge(index: number) {
        const target = document.getElementsByClassName(`timeline-badge`)[index];
        const animateElement = document.getElementsByClassName(`timeline-panel`)[index];
        const animateClassName = index % 2 === 0 ? AnimateName.LEFT_IN : AnimateName.RIGHT_IN;

        if (!animateElement) {
            return;
        }

        this.targetIntersectionObserver[index] = new IntersectionObserver(entries => {
            const { isIntersecting, intersectionRatio } = entries[0];
            const targetIsVisible = isIntersecting && intersectionRatio >= 0;

            if (targetIsVisible) {
                animateElement.classList.add('animated', animateClassName, 'delay-1');
                animateElement.classList.replace(AnimateName.LEFT_OUT, AnimateName.LEFT_IN);
                animateElement.classList.replace(AnimateName.RIGHT_OUT, AnimateName.RIGHT_IN);
            } else {
                animateElement.classList.replace(AnimateName.LEFT_IN, AnimateName.LEFT_OUT);
                animateElement.classList.replace(AnimateName.RIGHT_IN, AnimateName.RIGHT_OUT);
            }
        });

        this.targetIntersectionObserver[index].observe(target);
    }

    mounted() {
        const count = document.getElementsByClassName(`timeline-badge`).length;
        for (let i = 0; i < count; i++) {
            this.observeTimeBadge(i);
        }
    }
}
</script>
<style scoped lang="less">
#story {
    padding: 120px 0;

    i {
        animation-iteration-count: infinite;
    }

    .container {
        .row {
            display: block;
            margin-bottom: 70px;

            h1 {
                font-size: 53px;
                margin-top: 20px;
                margin-bottom: 10px;

                span {
                    color: #f9667e;
                }
            }

            .divider {
                width: 50px;
                margin: 20px auto;
                border-bottom: solid 2px #f9667e;
            }

            p {
                font-size: 18px;
                margin: 0 0 10px;
            }
        }

        .story-footer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin-top: 50px;

            span {
                color: #f9667e;
                font-weight: bold;
            }
        }

        .timeline {
            list-style: none;
            padding: 20px 0 20px;
            position: relative;
        }

        .timeline:before {
            top: 0;
            bottom: 0;
            position: absolute;
            content: ' ';
            width: 3px;
            background-color: rgba(0, 0, 0, 0.09);
            left: 50%;
            margin-left: -1.5px;
        }

        .timeline > li {
            margin-bottom: 20px;
            position: relative;
        }

        .timeline > li:before,
        .timeline > li:after {
            content: ' ';
            display: table;
        }

        .timeline > li:after {
            clear: both;
        }

        .timeline > li:before,
        .timeline > li:after {
            content: ' ';
            display: table;
        }

        .timeline > li:after {
            clear: both;
        }

        .timeline > li > .timeline-panel {
            width: 45%;
            float: left;
            border-radius: 2px;
            padding: 20px 20px 50px 20px;
            position: relative;
            background: transparent;
            border: 3px solid #ededed;
        }

        .timeline > li > .timeline-panel:before {
            position: absolute;
            top: 24px;
            right: -18px;
            display: inline-block;
            border-top: 17px solid transparent;
            border-left: 17px solid #e8e8e8;
            border-right: 0 solid #e8e8e8;
            border-bottom: 18px solid transparent;
            content: ' ';
        }

        .timeline > li > .timeline-panel:after {
            position: absolute;
            top: 27px;
            right: -14px;
            display: inline-block;
            border-top: 14px solid transparent;
            border-left: 14px solid #fff;
            border-right: 0 solid #fff;
            border-bottom: 14px solid transparent;
            content: ' ';
        }

        .timeline > li > .timeline-badge {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 1rem;
            text-align: center;
            position: absolute;
            top: 16px;
            left: 50%;
            margin-left: -25px;
            background-color: #f9667e;
            z-index: 100;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
        }
        .timeline > li:first-child > .timeline-badge {
            position: absolute;
            top: 1%;
            left: 50%;
        }
        .timeline > li > .timeline-end > .timeline-badge {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 1rem;
            text-align: center;
            position: absolute;
            top: 16px;
            left: 50%;
            margin-left: -25px;
            background-color: #f9667e;
            z-index: 100;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
            position: absolute;
            top: 100%;
            left: 50%;
        }
        .timeline > li > .timeline-end > .caption {
            top: 110%;
            left: 45%;
            border: 1px solid #d4d4d4;
            border-radius: 2px;
            padding: 20px 20px 50px 20px;
            position: absolute;
            -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
            background: #fff;
            width: 300px;
        }
        .timeline > li {
            margin-top: -20%;
        }

        .timeline > li:first-child {
            margin-top: -27px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
            float: right;
        }
        .timeline > li.timeline-inverted > .timeline-panel:before {
            border-left-width: 0;
            border-right-width: 15px;
            left: -15px;
            right: auto;
        }
        .timeline > li.timeline-inverted > .timeline-panel:after {
            border-left-width: 0;
            border-right-width: 14px;
            left: -14px;
            right: auto;
        }
        .timeline-badge.primary {
            background-color: #2e6da4 !important;
        }

        .timeline-badge.success {
            background-color: #3f903f !important;
        }

        .timeline-badge.warning {
            background-color: #f0ad4e !important;
        }

        .timeline-badge.danger {
            background-color: #d9534f !important;
        }

        .timeline-badge.info {
            background-color: #5bc0de !important;
        }
        .timeline-title {
            margin-top: 0;
            color: inherit;
        }
        .timeline > li .timeline-heading .timeline-title {
            text-align: right;
        }
        .timeline > li.timeline-inverted .timeline-heading .timeline-title {
            text-align: left;
        }
        .timeline-body > p,
        .timeline-body > ul {
            margin-bottom: 0;
        }
        .timeline-body > p {
            font-size: 20px;
            line-height: 30px;
            white-space: pre-wrap;
        }
        .timeline-body img {
            margin: 30px auto;
        }

        .timeline-body > p + p {
            margin-top: 5px;
        }
        .final-frase {
            font-size: 28px;
            margin-top: 20px;
        }
        .final-frase span {
            color: #f9667e;
            font-weight: bold;
        }
    }
}
</style>
