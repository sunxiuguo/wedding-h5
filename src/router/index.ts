import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Cyberpunk from '../views/CyberPunk.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'cyber',
        component: Cyberpunk
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
    },
    {
        path: '/story',
        name: 'story',
        component: () => import(/* webpackChunkName: "story" */ '../views/StoryPage.vue')
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import(/* webpackChunkName: "story" */ '../views/LightGrid.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
