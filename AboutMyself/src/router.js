import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name:"Home",
            component: () => import("./Pages/Home.vue"),
        },
    ]
})

export default router;