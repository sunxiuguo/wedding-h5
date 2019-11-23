<template>
    <section id="home">
        <Parallax>
            <img src="https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg" alt="cool background" />
        </Parallax>
        <section class="absolute-content">
            <h3 class="title">
                <span></span>
                We are getting married!
                <span></span>
            </h3>
            <CoupleNames :showAnimate="true" />
            <div class="date">
                <span>2020</span>
                年
                <span>12</span>
                月
                <span>03</span>
                日
            </div>
            <div class="hour">
                上午 10:00
            </div>
            <div class="place">
                <h3>山东省青岛市即墨区</h3>
                <p>xxxx路xxxxx街xxxxxx号</p>
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Parallax from 'vue-parallaxy';

import CoupleNames from './CoupleNames.vue';

@Component({
    components: {
        CoupleNames,
        Parallax
    }
})
export default class MainHeadSection extends Vue {}
</script>
<style scoped lang="less">
#home {
    text-align: center;
    position: relative;

    .absolute-content {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
    }

    .title span {
        border-image: none;
        display: inline-block;
        margin: 5px 10px;
        width: 40px;
        border-color: #d6516d;
        border-style: solid none none;
        border-width: 1px 0px 0px;
    }

    .date {
        font-size: 50px;
        margin-top: 20px;

        span {
            font-size: 70px;
            border-bottom: solid 2px #f9667e;
            line-height: 1em;
        }
    }

    .hour {
        font-size: 30px;
        margin-top: 50px;
    }

    .place {
        font-size: 20px;

        h3 {
            margin-top: 20px;
            margin-bottom: 10px;
        }

        p {
            margin: 0 0 10px;
            letter-spacing: 2px;
        }
    }
}
</style>
