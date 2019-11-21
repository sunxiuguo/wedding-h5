<template>
    <div class="container">
        <MainHeadSection />
        <FixedRouteHeader />
        <CoupleProfile />
        <QuotaFrase />
        <Story />
        <div class="test-height"></div>
    </div>
</template>

<script>
import MainHeadSection from '../components/MainHeadSection.vue';
import FixedRouteHeader from '../components/FixedRouteHeader.vue';
import CoupleProfile from '../components/CoupleProfile.vue';
import QuotaFrase from '../components/QuotaFrase.vue';
import Story from '../components/Story.vue';

export default {
    name: 'home',
    components: {
        MainHeadSection,
        FixedRouteHeader,
        CoupleProfile,
        QuotaFrase,
        Story
    }
};
</script>
<style lang="less">
@import '../css/common.less';
body {
    color: #7b7571;
}
</style>
<style lang="less" scoped>
.test-height {
    height: 3000px;
    width: 100vw;
}
.container {
    color: #7b7571;
}
</style>
