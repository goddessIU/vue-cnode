import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: () => import('../views/Main/Home.vue'),
            side: () => import('../views/Side/Home.vue')
        }
    },
    {
        path: '/page',
        name: 'page',
        components: {
            default: () => import('../views/Main/Page.vue'),
            side: () => import('../views/Side/Page.vue')
        }
    }
]

export default new VueRouter({
    routes
})