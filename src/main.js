import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import HomeApp from '@/views/HomeApp.vue'
import AllRepos from '@/views/AllRepos.vue'
import MyRepo from '@/views/MyRepo.vue'
import NotFound from '@/views/NotFound'

const router =createRouter({
    history: createWebHistory(),
    routes: [
        {
        path:'/',
        name: "HomeApp",
        component:HomeApp,
    },

    {
        path:'/repos',
        name: "AllRepos",
        component:AllRepos,

    },

    {
        path:'/myrepo',
        name: "MyRepo",
        component:MyRepo,

    },
    // {
    //     path: "/myrepo",
    //     name: "SingleRepo",
    //     component: SingRep,
    //   },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
      },

],
})

createApp(App).use(router).mount('#app')
