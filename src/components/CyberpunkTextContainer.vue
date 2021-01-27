<template>
    <div class="text-magic" :data-word="text">
        {{ text }}
        <div class="white"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CyberpunkTextContainer extends Vue {
    @Prop({ type: String, default: '' }) text!: string;
}
</script>
<style scoped lang="less">
@base: 1200;
.text-magic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2.4);
    // width: (300 / @base) * 100vw;
    font-size: (36 / @base) * 100vw;
    font-family: Raleway, Verdana, Arial;
    color: #fff;
}
.white {
    position: absolute;
    left: -(10 / @base) * 100vw;
    width: 100%;
    height: (3 / @base) * 100vw;
    background: #000;
    z-index: 4;
    animation: whiteMove 3s ease-out infinite;
}

.text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0.5px;
    height: 0px;
    color: rgba(255, 255, 255, 0.9);
    overflow: hidden;
    z-index: 2;
    animation: redShadow 1s ease-in infinite;
    filter: contrast(200%);
    text-shadow: 1px 0 0 red;
}

.text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -(3 / @base) * 100vw;
    height: (36 / @base) * 100vw;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    background: rgba(0, 0, 0, 0.9);
    animation: redHeight 1.5s ease-out infinite;
    filter: contrast(200%);
    text-shadow: -(1 / @base) * 100vw 0 0 cyan;
    mix-blend-mode: darken;
}

@keyframes redShadow {
    20% {
        height: (32 / @base) * 100vw;
    }
    60% {
        height: (6 / @base) * 100vw;
    }
    100% {
        height: (42 / @base) * 100vw;
    }
}

@keyframes redHeight {
    20% {
        height: (42 / @base) * 100vw;
    }
    35% {
        height: (12 / @base) * 100vw;
    }
    50% {
        height: (40 / @base) * 100vw;
    }
    60% {
        height: (20 / @base) * 100vw;
    }
    70% {
        height: (34 / @base) * 100vw;
    }
    80% {
        height: (22 / @base) * 100vw;
    }
    100% {
        height: (0 / @base) * 100vw;
    }
}

@keyframes whiteMove {
    8% {
        top: (38 / @base) * 100vw;
    }
    14% {
        top: (8 / @base) * 100vw;
    }
    20% {
        top: (42 / @base) * 100vw;
    }
    32% {
        top: (2 / @base) * 100vw;
    }
    99% {
        top: (30 / @base) * 100vw;
    }
}
</style>
