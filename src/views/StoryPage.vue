<template>
    <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DateFormat } from '../utils/dateFormat';
import { Flipper } from '../utils/flipper';

@Component
export default class StoryPage extends Vue {
    get storyId() {
        return this.$route.query.id;
    }

    mounted() {
        console.log(this.storyId);
    }
}
</script>
<style scoped lang="less"></style>
