<template>
    <section id="frase">
        <div class="container">
            <h2>{{ frase }}</h2>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommonConfig from '../const/commonConfig';

@Component
export default class QuotaFrase extends Vue {
    frase = CommonConfig.frase;
}
</script>
<style scoped lang="less">
#frase {
    text-align: center;
    position: relative;

    background: url('https://cdn.zhusun.club/image/wedding/bg2.pngbg-2.jpeg') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #ffffff;

    padding: 120px 0;

    display: flex;
    justify-content: center;

    .container {
        height: 100%;
        width: 66.7%;

        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 30px;
            font-weight: 500;
        }
    }
}
</style>
