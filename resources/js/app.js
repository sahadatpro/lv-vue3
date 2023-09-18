import './bootstrap';

import { createApp } from 'vue'
import App from "./layouts/App.vue"
import PostCreate from "./Pages/Posts/Create.vue"
import PostIndex from "./Pages/Posts/Index.vue"
import { TailwindPagination } from 'laravel-vue-pagination';
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        'path': '/',
        component: PostIndex,
        name: 'posts.index'
    },
    {
        'path': '/posts/create',
        component: PostCreate,
        name: 'posts.create'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.component('TailwindPagination', TailwindPagination)
app.mount('#app');
