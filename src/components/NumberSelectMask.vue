<template>
    <div class="number-select-mask" @touchmove.prevent>
        <div class="grid">
            <!-- 第一层：网格 -->
            <ul class="grid-list grid-border">
                <li class="grid-item" v-for="(item, index) in digitalMatrix" :key="item + index"></li>
            </ul>
            <!-- 第二层：数字 -->
            <ul class="grid-list grid-num">
                <li class="grid-item" tabindex="0" v-for="(item, index) in digitalMatrix" :key="item + index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommonConfig from '../const/commonConfig';

@Component
export default class NumberSelectMask extends Vue {
    digitalMatrix: string[] = [];
    selectedDigitalIdx: number[] = [];
    questions = CommonConfig.maskQuestions;

    created() {
        this.initDigitalMatrix();
    }

    onSelect(idx: number) {
        const existedIndex = this.selectedDigitalIdx.findIndex(item => item === idx);
        if (existedIndex !== -1) {
            // 已点选
            if (existedIndex === this.selectedDigitalIdx.length - 1) {
                // 允许从后开始逐个取消点选
                this.selectedDigitalIdx.pop();
            }
            return;
        }
        this.selectedDigitalIdx.push(idx);
    }

    initDigitalMatrix() {
        // 初始化一个10*10的, 填充0-9随机整数的二维数组
        this.digitalMatrix = Array.from({ length: 120 }, () => String(Math.floor(Math.random() * 10)));
    }
}
</script>
<style lang="less">
body {
    background-color: #333;
}
</style>
<style scoped lang="less">
.number-select-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    z-index: 1000;
}
.grid {
    margin: (10/375) * 100vw (5/375) * 100vw;
    position: relative;
}

.grid-list {
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
}

.grid-item {
    width: (20/375) * 100vw;
    height: (20/375) * 100vw;
    border: (1/375) * 100vw solid transparent;
    margin-top: (3/375) * 100vw;
    margin-left: (3/375) * 100vw;
    display: flex;
    font-size: (10/375) * 100vw;
    justify-content: center;
    align-items: center;
    outline: none;
    transition: 300ms;
}

.grid-border {
    position: absolute;

    .grid-item {
        border-color: #2bf;
    }
}
</style>
