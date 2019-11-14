<template>
    <ul class="names" :class="size">
        <li>孙修国</li>
        <li class="circle" :class="size">&</li>
        <li>祝佳儿</li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type CoupleSize = 'small' | 'medium' | 'large';

@Component
export default class MainHeadSection extends Vue {
    @Prop({ default: 'large' }) size!: CoupleSize;
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
