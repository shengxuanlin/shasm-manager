import Vue from 'vue'
import Router from 'vue-router'
import Manager from '../views/layout'
import Project from '../views/project/project.vue'
import Login from '../views/login/login.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Manager',
        component: Manager
    }, {
        path: '/project',
        name: 'Project',
        component: Project
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }]
})
