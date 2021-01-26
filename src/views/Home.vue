<template>
    <div class="home-container">
        <NumberSelectMask v-if="showQuestionMask" />
        <MainHeadSection />
        <FixedRouteHeader />
        <CoupleProfile />
        <QuotaFrase />
        <Story />
        <CardCountDown />
        <Gallary />
        <div class="bottom-info">
            <a class="gray" href="http://beian.miit.gov.cn" target="_blank" rel="nofollow">京ICP备19046991号-1</a>
            <a class="gray" href="mailto:sunxiuguo1@qq.com" target="_self">
                联系邮箱: sunxiuguo1@qq.com
            </a>
            <span class="gray">
                联系电话: 17600019061
            </span>
        </div>
    </div>
</template>

<script>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import MainHeadSection from '../components/MainHeadSection.vue';
import FixedRouteHeader from '../components/FixedRouteHeader.vue';
import CoupleProfile from '../components/CoupleProfile.vue';
import QuotaFrase from '../components/QuotaFrase.vue';
import Story from '../components/Story.vue';
import CardCountDown from '../components/CardCountDown.vue';
import Gallary from '../components/Gallary.vue';
import NumberSelectMask from '../components/NumberSelectMask.vue';
import { BaseTrack } from '../utils/track';
import { Performance } from '../utils/performance';
import { vScroll } from '../utils/scroll';

@Component({
    components: {
        MainHeadSection,
        FixedRouteHeader,
        CoupleProfile,
        QuotaFrase,
        Story,
        CardCountDown,
        Gallary,
        NumberSelectMask
    }
})
export default class Home extends Vue {
    showQuestionMask = true;

    @Watch('showQuestionMask', { immediate: true })
    onQuestionMaskStatusChange() {
        if (this.showQuestionMask) {
            vScroll.inserted();
        } else {
            vScroll.unbind();
        }
    }

    created() {
        window.addEventListener('load', () => {
            BaseTrack.track(Performance.getTimings());
        });
    }
}
</script>
<style lang="less">
@import '../css/common.less';
body {
    color: #7b7571;
}

.text-center {
    text-align: center;
}

.img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
}
</style>
<style lang="less" scoped>
.bottom-info {
    height: 50px;
    width: 100vw;
    padding: 0 100px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .gray {
        color: gray;
        font-size: 16px;
    }
}
.home-container {
    color: #7b7571;
}
</style>
