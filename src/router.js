import Vue from 'vue';
import VueRouter from 'vue-router';
import Lista from './pages/lista/lista.vue';

Vue.use(VueRouter);

export const router=new VueRouter({mode:'history',routes:[
    {
        path:'/Lista',
        component:Lista,
    }
]})