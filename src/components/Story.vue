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
                    这是我们认识的时间线，我们故事的开始。
                </p>
            </div>
            <ul class="timeline">
                <li
                    v-for="(story, index) in storyList"
                    :key="story.title"
                    :class="{ 'timeline-inverted': index % 2 === 0 }"
                ></li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Story extends Vue {
    storyList: any[] = [
        {
            year: '2018年',
            month: '4月',
            day: '25日',
            title: '我们的第一次相遇',
            desc: 'xxxxxxxxxxxxxxxxxxx',
            imgSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
        },
        {
            year: '2018年',
            month: '4月',
            day: '25日',
            title: '我们的第一次相遇1',
            desc: 'xxxxxxxxxxxxxxxxxxx',
            imgSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
        },
        {
            year: '2018年',
            month: '4月',
            day: '25日',
            title: '我们的第一次相遇2',
            desc: 'xxxxxxxxxxxxxxxxxxx',
            imgSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
        },
        {
            year: '2018年',
            month: '4月',
            day: '25日',
            title: '我们的第一次相遇3',
            desc: 'xxxxxxxxxxxxxxxxxxx',
            imgSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg'
        }
    ];
}
</script>
<style scoped lang="less">
#story {
    padding: 120px 0;

    .container {
        width: 80%;
        margin: 0 auto;

        .row {
            width: 100%;
            padding-bottom: 70px;

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

        .timeline {
            list-style: none;
            padding: 20px 0 20px;
            position: relative;
            &::before {
                top: 0;
                bottom: 0;
                position: absolute;
                content: ' ';
                width: 3px;
                background-color: rgba(0, 0, 0, 0.09);
                left: 50%;
                margin-left: -1.5px;
                box-sizing: border-box;
            }
        }
    }
}
</style>
