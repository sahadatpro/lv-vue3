import './bootstrap';

import { createApp } from 'vue'
import PostIndex from "./Pages/Posts/Index.vue"
import { TailwindPagination } from 'laravel-vue-pagination';

const app = createApp({})
app.component('posts-index', PostIndex)
app.component('TailwindPagination', TailwindPagination)
app.mount('#app');
