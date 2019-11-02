<template>
    <section id="main-header">
        <h3 class="title">
            <span></span>
            We are getting married!
            <span></span>
        </h3>
        <ul class="names">
            <li>孙修国</li>
            <li class="circle">&</li>
            <li>祝佳儿</li>
        </ul>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainHeadSection extends Vue {}
</script>
<style scoped lang="less">
#main-header {
    background: url('http://marttinfisher.com/themes/bodas/img/bg-1.jpg') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    text-align: center;
    height: 800px;
    padding: 50px 0;
    position: relative;
    padding-top: 6%;

    .title span {
        border-image: none;
        display: inline-block;
        margin: 5px 10px;
        width: 40px;
        border-color: #d6516d;
        border-style: solid none none;
        border-width: 1px 0px 0px;
    }

    ul.names {
        li {
            display: inline-block;
        }

        list-style: none;
        display: inline;
        font-size: 100px;
        font-weight: 300;
        padding: 0px;
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

.circle {
    margin: 0 20px;
    background: #f9667e;
    width: 100px;
    height: 100px;
    text-align: center;
    font-size: 63px;
    font-weight: normal;
    line-height: 1.5em;
    border-radius: 50%;
    color: #fff;
    top: -15px;
    position: relative;
}
</style>
