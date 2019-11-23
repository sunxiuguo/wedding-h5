<template>
    <div v-sticky="{ zIndex: 1000, stickyTop: 0, disabled: false }">
        <div>
            <header id="fixed-header">
                <div class="sticky-wrapper" id="nav-sticky-wrapper">
                    <nav id="nav">
                        <div class="container">
                            <a href="#" class="navbar-brand">
                                <CoupleNames size="small" />
                            </a>
                            <div class="navbar-collapse">
                                <ul id="nav-list">
                                    <li
                                        v-for="item in routeNameList"
                                        :key="item.name"
                                        :class="{ active: activeRoute === item.name }"
                                    >
                                        <a :href="item.anchor">{{ item.name }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueSticky from 'vue-sticky';
import CoupleNames from './CoupleNames.vue';

@Component({
    components: {
        CoupleNames
    },
    directives: {
        sticky: VueSticky
    }
})
export default class FixedRouteHeader extends Vue {
    activeRoute: string = 'Home';
    routeNameList: any[] = [
        {
            name: 'Home',
            anchor: '#home'
        },
        {
            name: 'Couple',
            anchor: '#couple'
        },
        {
            name: 'Our Sotry',
            anchor: '#story'
        },
        {
            name: 'Count Down',
            anchor: '#count-down'
        },
        {
            name: 'Gallery',
            anchor: '#gallary'
        },
        {
            name: 'Featured People',
            anchor: '#featured_people'
        },
        {
            name: 'RSVP',
            anchor: '#rsvp'
        }
    ];
}
</script>
<style scoped lang="less">
.sticky-wrapper {
    width: 100%;
    height: 50px;

    #nav {
        font-family: 'Oswald', Verdana, Geneva, sans-serif;
        font-size: 20px;
        z-index: 998;
        width: 100%;
        padding: 20px 0px;
        background-color: #fff;
        border: 0px;
        border-radius: 4px;
        position: relative;
        min-height: 50px;
        margin-bottom: 20px;

        .container {
            margin-right: auto;
            margin-left: auto;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .navbar-brand {
                padding: 15px 15px;
                font-size: 18px;
                line-height: 20px;
                color: #777;
            }

            .navbar-collapse {
                padding-right: 15px;
                padding-left: 15px;
                overflow-x: visible;
                -webkit-overflow-scrolling: touch;
                display: flex;
                height: auto !important;
                padding-bottom: 0;
                width: auto;
                border-top: 0;
                -webkit-box-shadow: none;
                box-shadow: none;
                height: 50px;

                &::after {
                    clear: both;
                }

                #nav-list {
                    padding: 0px 30px;
                    list-style: none;
                    margin: 0 !important;

                    li {
                        position: relative;
                        display: block;
                        float: left;

                        a {
                            color: #777;
                            padding: 10px 6px;
                            line-height: 20px;
                            position: relative;
                            display: block;
                            text-decoration: none;
                            background-color: transparent;
                            font-weight: normal;

                            &::after {
                                content: '/';
                                padding-left: 10px;
                                color: rgba(0, 0, 0, 0.2);
                            }
                        }
                    }
                }
            }
        }
    }
}

.circle {
    margin: 0 20px;
    background: #f9667e;
    width: 100px;
    height: 100px;
    text-align: center;
    font-size: 63px;
    font-weight: normal;
    line-height: 1.5em;
    border-radius: 50%;
    color: #fff;
    top: -15px;
    position: relative;
}
</style>
