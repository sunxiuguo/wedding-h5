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

interface ProfileInfo {
    lastName: string;
    firstName: string;
    imageSrc: string;
    desc: string;
}

@Component
export default class CoupleProfile extends Vue {
    profileInfoList: ProfileInfo[] = [
        {
            lastName: '孙',
            firstName: '修国',
            imageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            desc:
                '我在写bug！我是傻逼！我们会一直走下去！我在写bug！我是傻逼！我们会一直走下去！我在写bug！我是傻逼！我们会一直走下去！我在写bug！我是傻逼！我们会一直走下去！我在写bug！我是傻逼！我们会一直走下去！'
        },
        {
            lastName: '祝',
            firstName: '佳儿',
            imageSrc: 'https://cdn.zhusun.club/image/wedding/bg1.pngbg-1.jpg',
            desc:
                '哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！哈哈哈哈我不喜欢傻逼！'
        }
    ];
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
