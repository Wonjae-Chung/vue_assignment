import VueRouter from 'vue-router'
import Vue from 'vue'
import Big_left from '@/components/Big_left.vue'
import Big_right from '@/components/Big_right.vue'
import Home_un from '@/components/Home_under'



Vue.use(VueRouter);


export default new VueRouter({
    mode: "history",
    routes: [{
            path: '/',
            name: "Home_under",
            component: Home_un
        },
        {
            path: '/Big_left',
            name: "Big_left",
            component: Big_left
        },
        {
            path: '/Big_right',
            name: "Big_right",
            component: Big_right
        }
    ]
});