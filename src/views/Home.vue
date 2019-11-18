<template>
    <div class="container">
        <MainHeadSection />
        <FixedRouteHeader />
        <CoupleProfile />
        <div class="test-height"></div>
    </div>
</template>

<script>
import MainHeadSection from '../components/MainHeadSection.vue';
import FixedRouteHeader from '../components/FixedRouteHeader.vue';
import CoupleProfile from '../components/CoupleProfile.vue';

export default {
    name: 'home',
    components: {
        MainHeadSection,
        FixedRouteHeader,
        CoupleProfile
    }
};
</script>
<style lang="less">
@import '../css/common.less';
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
