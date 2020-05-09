<template>
    <div class="grid" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <ul class="grid-list grid-border" ref="gridBorder" :style="gridBorderStyle">
            <li v-for="(item, index) in TestNumbers" :key="`${item}-${index}`" class="grid-item"></li>
        </ul>
        <ul class="grid-list grid-num">
            <li v-for="(item, index) in TestNumbers" :key="`${item}-${index}`" tabindex="0" class="grid-item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

// 参考https://juejin.im/post/5eb41918f265da7b9b5ee2be?utm_source=gold_browser_extension#heading-1
@Component
export default class LightGrid extends Vue {
    readonly MAX_NUMBER_COUNT = 100;
    readonly TestNumbers = [
        1,
        2,
        3,
        2,
        4,
        1,
        8,
        7,
        0,
        5,
        6,
        9,
        7,
        8,
        3,
        1,
        2,
        3,
        2,
        4,
        1,
        8,
        7,
        0,
        5,
        6,
        9,
        7,
        8,
        3,
        1,
        2,
        3,
        2,
        4,
        1,
        8,
        7,
        0,
        5,
        6,
        9,
        7,
        8,
        3
    ];

    $refs!: {
        gridBorder: any;
    };

    x: number = -500;
    y: number = -500;

    get gridBorderStyle() {
        return {
            WebkitMaskPosition: `${this.x}px ${this.y}px`, // 此处设置 mask 样式
            maskPosition: `${this.x}px ${this.y}px`
        };
    }

    handleMouseMove(e: any) {
        e.stopPropagation();
        const rect = this.$refs.gridBorder ? this.$refs.gridBorder.getBoundingClientRect() : null;
        this.setX(e.pageX - (rect ? rect.x : -500) - 150);
        this.setY(e.pageY - (rect ? rect.y : -500) - 150);
    }

    handleMouseLeave() {
        this.setX(-500);
        this.setY(-500);
    }

    setX(val: number) {
        this.x = val;
    }

    setY(val: number) {
        this.y = val;
    }
}
</script>
<style scoped lang="less">
.grid {
    position: relative;
    background-color: #333;
    width: 100vw;
    height: 100vh;
}

.grid-list {
    top: 0;
    left: 0;
    color: #666;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
}

.grid-item {
    width: 80px;
    height: 80px;
    border: 1px solid transparent;
    margin-top: 4px;
    margin-left: 4px;
    display: flex;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    outline: none;
    transition: 300ms;
}

.grid-border {
    position: absolute;
    mask-size: 240px 240px;
    -webkit-mask-size: 240px 240px;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-image: radial-gradient(circle, #fff, transparent 120px);
    -webkit-mask-image: radial-gradient(circle, #fff, transparent 120px);
    -webkit-position: 0 0;

    .grid-item {
        border-color: #2bf;
    }
}

.grid-num {
    .grid-item {
        cursor: pointer;

        &:hover {
            color: #fff;
            // border-color: #2bf;
        }

        &:focus {
            color: #666;
            background-color: #fe2;
        }
    }
}
</style>
