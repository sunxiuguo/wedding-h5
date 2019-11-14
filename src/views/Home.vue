<template>
    <div class="container">
        <MainHeadSection />
        <FixedRouteHeader />
    </div>
</template>

<script>
import MainHeadSection from '../components/MainHeadSection.vue';
import FixedRouteHeader from '../components/FixedRouteHeader.vue';

export default {
    name: 'home',
    components: {
        MainHeadSection,
        FixedRouteHeader
    }
};
</script>
<style lang="less">
@import '../css/common.less';
</style>
<style lang="less" scoped>
.container {
    color: #7b7571;
}
</style>
