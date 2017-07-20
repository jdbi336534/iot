import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login1'
import city from '@/components/choosecity/choosecity'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '',
        redirect: 'login'
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/city',
        name: 'city',
        component: city
    }]
})
