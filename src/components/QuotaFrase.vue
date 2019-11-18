<template>
    <section id="frase">
        <Parallax>
            <img src="http://marttinfisher.com/themes/bodas/img/bg-2.jpg" alt="cool background" />
        </Parallax>
        <section class="absolute-content">
            <h2>
                <!-- 我们会用尽一生一世去了解彼此，去爱护彼此，去陪伴彼此。 -->
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </h2>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Parallax from 'vue-parallaxy';

@Component({
    components: {
        Parallax
    }
})
export default class QuotaFrase extends Vue {}
</script>
<style scoped lang="less">
#frase {
    text-align: center;
    position: relative;

    .absolute-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            // width: 70%;
            font-size: 30px;
            font-weight: 500;
        }
    }
}
</style>
