<template>
    <div class="home-container">
        <MainHeadSection />
        <FixedRouteHeader />
        <CoupleProfile />
        <QuotaFrase />
        <Story />
        <CardCountDown />
        <Gallary />
        <div class="test-height">
            to be continued....
        </div>
    </div>
</template>

<script>
import MainHeadSection from '../components/MainHeadSection.vue';
import FixedRouteHeader from '../components/FixedRouteHeader.vue';
import CoupleProfile from '../components/CoupleProfile.vue';
import QuotaFrase from '../components/QuotaFrase.vue';
import Story from '../components/Story.vue';
import CardCountDown from '../components/CardCountDown.vue';
import Gallary from '../components/Gallary.vue';

export default {
    name: 'home',
    components: {
        MainHeadSection,
        FixedRouteHeader,
        CoupleProfile,
        QuotaFrase,
        Story,
        CardCountDown,
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
    height: 100px;
    width: 100vw;
}
.home-container {
    color: #7b7571;
}
</style>
