<template>
    <section id="frase">
        <div class="container">
            <h2>我们彼此会永远相互守候，相互支持，相互拥抱。</h2>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class QuotaFrase extends Vue {}
</script>
<style scoped lang="less">
#frase {
    text-align: center;
    position: relative;

    background: url('http://marttinfisher.com/themes/bodas/img/bg-2.jpg') no-repeat;
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
