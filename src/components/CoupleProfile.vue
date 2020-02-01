<template>
    <section id="couple">
        <div class="container">
            <div v-for="profile in profileInfoList" :key="profile.name" class="profile">
                <h2>
                    {{ profile.lastName }}
                    <span>
                        {{ profile.firstName }}
                    </span>
                </h2>
                <img :src="profile.imageSrc" :alt="profile.firstName" class="profile-avatar" />
                <p>
                    {{ profile.desc }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommonConfig from '../const/commonConfig';

interface ProfileInfo {
    lastName: string;
    firstName: string;
    imageSrc: string;
    desc: string;
}

@Component
export default class CoupleProfile extends Vue {
    targetIntersectionObserver: IntersectionObserver | null = null;
    animateName = 'tada';

    profileInfoList: ProfileInfo[] = [
        {
            lastName: CommonConfig.maleLastName,
            firstName: CommonConfig.maleFirstName,
            imageSrc: CommonConfig.maleAvatar,
            desc: CommonConfig.maleDesc
        },
        {
            lastName: CommonConfig.femaleLastName,
            firstName: CommonConfig.femaleFirstName,
            imageSrc: CommonConfig.famelaeAvatar,
            desc: CommonConfig.femaleDesc
        }
    ];

    observeTimeBadge(index: number) {
        const target = document.getElementsByClassName(`profile-avatar`)[index];

        if (!target) {
            return;
        }

        this.targetIntersectionObserver = new IntersectionObserver(entries => {
            const { isIntersecting, intersectionRatio } = entries[0];
            const targetIsVisible = isIntersecting && intersectionRatio >= 0;
            const delay = `delay-${index + 1}s`;
            if (targetIsVisible) {
                target.classList.add('animated', this.animateName, delay);
            } else {
                target.classList.remove('animated', this.animateName, delay);
            }
        });

        this.targetIntersectionObserver.observe(target);
    }

    mounted() {
        const count = document.getElementsByClassName(`profile-avatar`).length;
        for (let i = 0; i < count; i++) {
            this.observeTimeBadge(i);
        }
    }
}
</script>
<style scoped lang="less">
#couple {
    background-color: #f4f4f4;
    padding: 120px 0;

    .container {
        // width: 100%;
        padding: 0 50px;
        display: flex;
        justify-content: space-around;

        .profile {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 20px;

            h2 {
                font-size: 30px;
                margin-bottom: 40px;
                span {
                    color: #f9667e;
                }
            }

            .profile-avatar {
                border: 20px solid #fff;
                border-radius: 50%;
                display: block;
                width: 16rem;
                height: 16rem;
            }

            p {
                margin-top: 40px;
                text-align: center;
                font-size: 15px;
                letter-spacing: 1px;
            }
        }
    }
}
</style>
