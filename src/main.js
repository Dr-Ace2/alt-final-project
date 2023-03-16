import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import HomeApp from './components/HomeApp.vue'
import AboutApp from './components/AboutApp.vue'

const router =createRouter({
    history: createWebHistory(),
    routes: [
        {
        path:'/',
        name: "HomeApp",
        component:HomeApp,
    },

    {
        path:'/about',
        name: "AboutApp",
        component:AboutApp

    },

],
})

createApp(App)
.use(router)
.mount('#app')
