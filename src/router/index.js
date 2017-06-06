import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Layout from '../views/layout'
import Project from '../views/project/project'
import User from '../views/user/user'
import Resource from '../views/resource/resource'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/layout/project'
    }, {
        path: '/layout',
        name: 'Layout',
        component: Layout,
        children: [{
            path: 'project',
            component: Project
        }, {
            path: 'user',
            component: User
        }, {
            path: 'resource',
            component: Resource
        }]
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }]
})
