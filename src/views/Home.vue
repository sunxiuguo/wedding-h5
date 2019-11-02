<template>
    <div class="container">
        <MainHeadSection />
    </div>
</template>

<script>
import MainHeadSection from '../components/MainHeadSection.vue';

export default {
    name: 'home',
    components: {
        MainHeadSection
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
