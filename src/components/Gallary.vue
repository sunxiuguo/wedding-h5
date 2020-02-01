<template>
    <section id="gallary">
        <div class="container">
            <div class="row">
                <h1>
                    我们的
                    <span>相册</span>
                </h1>
                <div class="divider"></div>
                <p>
                    <em>
                        这里是我们的相册,记录了我们的感情的脚印~
                    </em>
                </p>
            </div>
            <div class="row gallery-popup">
                <div
                    class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter gallery-family"
                    v-for="gallary in gallaryList"
                    :key="gallary.title"
                    @click="handleSelectGallary(gallary.id)"
                >
                    <img :src="gallary.coverImageSrc" alt="Gallary image" class="grid-image img-responsive" />
                    <span>{{ gallary.title }}</span>
                </div>
            </div>
        </div>
        <div class="gallary-modal" v-if="showModal" @touchmove.prevent>
            <div class="close" @click="handleCloseModal"></div>
            <div class="custom-container animated bounceInLeft faster">
                <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                    <swiper-slide v-for="(image, index) of activeGallary" :key="index">
                        <div class="custom-image-container">
                            <img :src="image" alt="Gallary image" class="img-responsive" />
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                </swiper>
                <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                    <swiper-slide v-for="(image, index) of activeGallary" :key="index">
                        <div class="custom-image-container custom-slide-image-container">
                            <img :src="image" alt="Gallary image" class="img-responsive" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import CommonConfig from '../const/commonConfig';

@Component({
    components: {
        swiper,
        swiperSlide
    }
})
export default class Gallry extends Vue {
    gallaryList: any[] = CommonConfig.gallaryList;

    swiperOptionTop: any = {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };
    swiperOptionThumbs: any = {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    };

    showModal: boolean = false;
    activeGallaryId: number = 0;

    $refs!: {
        swiperTop: any;
        swiperThumbs: any;
    };

    get activeGallary() {
        return this.gallaryList.find(item => item.id === this.activeGallaryId).content;
    }

    observeTimeBadge() {
        const elements = document.getElementsByClassName('grid-image');
        for (let i = 0; i < elements.length; i++) {
            new IntersectionObserver(entries => {
                const { isIntersecting, intersectionRatio, boundingClientRect } = entries[0];
                const targetIsVisible = isIntersecting && intersectionRatio >= 0;

                const animateType = 'tada';
                const delay = 'delay-1s';

                if (!targetIsVisible) {
                    elements[i]!.classList.remove('animated', animateType, delay);
                } else {
                    elements[i]!.classList.add('animated', animateType, delay);
                }
            }).observe(document.querySelector('#gallary')!);
        }
    }

    mounted() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 27) {
                this.handleCloseModal();
            }
        });
        this.observeTimeBadge();
    }

    handleSelectGallary(id: number) {
        this.activeGallaryId = id;
        this.showModal = true;

        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper;
            const swiperThumbs = this.$refs.swiperThumbs.swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
    }

    handleCloseModal() {
        this.showModal = false;
    }
}
</script>
<style scoped lang="less">
#gallary {
    background-color: #f4f4f4;
    padding: 120px 0;
    position: relative;

    .row {
        margin-bottom: 70px;

        h1 {
            width: 100%;
            text-align: center;
            font-size: 53px;
            span {
                color: #f9667e;
            }
        }

        .divider {
            border-bottom: solid 2px #f9667e;
            margin: 20px auto;
            width: 50px;
        }

        p {
            font-size: 18px;
        }
    }

    .gallary-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        background: rgba(0, 0, 0, 0.4);

        .custom-container {
            position: relative;
            padding: 0 10%;
            transition-duration: 0.2s !important;

            .custom-image-container {
                width: 100%;
                height: auto;
                padding: 0 10%;
                text-align: center;
                margin-top: 3%;
            }

            .custom-slide-image-container {
                padding: 0;
            }
        }
    }

    .gallery-popup {
        margin-bottom: 30px;

        span {
            font-size: 20px;
            margin: 10px 0;
        }
    }

    .gallery_product {
        margin-bottom: 30px;
    }

    .swiper-slide {
        background-size: cover;
        background-position: center;
    }
    .gallery-top {
        height: 80% !important;
        width: 100%;
    }
    .gallery-thumbs {
        height: 20% !important;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
}
</style>
