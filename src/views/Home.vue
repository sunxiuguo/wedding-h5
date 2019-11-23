<template>
    <div class="home-container">
        <MainHeadSection />
        <FixedRouteHeader />
        <CoupleProfile />
        <QuotaFrase />
        <Story />
        <CountDown />
        <Gallary />
        <div class="test-height"></div>
    </div>
</template>

<script>
import MainHeadSection from '../components/MainHeadSection.vue';
import FixedRouteHeader from '../components/FixedRouteHeader.vue';
import CoupleProfile from '../components/CoupleProfile.vue';
import QuotaFrase from '../components/QuotaFrase.vue';
import Story from '../components/Story.vue';
import CountDown from '../components/CountDown.vue';
import Gallary from '../components/Gallary.vue';

export default {
    name: 'home',
    components: {
        MainHeadSection,
        FixedRouteHeader,
        CoupleProfile,
        QuotaFrase,
        Story,
        CountDown,
        Gallary
    }
};
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
.test-height {
    height: 3000px;
    width: 100vw;
}
.home-container {
    color: #7b7571;
}
</style>
