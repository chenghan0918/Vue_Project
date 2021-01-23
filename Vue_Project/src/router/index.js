import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HelloWorld'
Vue.use(VueRouter)
export default new VueRouter({ 
    routes:[ //路由設定
        {
            name: 'home',
            path: '/',
            component: Home,
        },
    ]
});