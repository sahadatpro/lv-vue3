<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <select name="category" v-model="selectedCategory" class="border border-gray-300 rounded-full w-3/4">
                        <option value="">~ Select category for filter ~</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                        </option>

                    </select>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 mt-6">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Content
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Created At
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                    v-for="(post, index) in posts.data" :key="index">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ post.id }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ post.title }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ post.category }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ post.content }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ post.created_at }}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <TailwindPagination :data="posts" @pagination-change-page="page => getPosts(page, selectedCategory)" />
                    <!-- <TailwindPagination :data="posts" @pagination-change-page="getPosts" /> -->
                    <!-- <Bootstrap4Pagination :data="posts" @pagination-change-page="getPosts" /> -->

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref, watch } from 'vue';
import usePosts from '../../composables/posts';
import useCategories from '../../composables/categories'
import { TailwindPagination } from 'laravel-vue-pagination';
// import { Bootstrap4Pagination } from 'laravel-vue-pagination';

export default {
    setup() {
        const selectedCategory = ref('')
        const { posts, getPosts } = usePosts();
        const { categories, getCategories } = useCategories();
        onMounted(getPosts);
        onMounted(getCategories)

        watch(selectedCategory, (current, prev) => {
            getPosts(1, current);
        });
        return { posts, getPosts, categories,  selectedCategory}
    }
}

// export default {
//     data() {
//         return {
//             posts: []
//         }
//     },
//     mounted() {
//         this.fetchPosts(); // call the posts
//     },
//     methods: {
//         fetchPosts() {
//             axios.get('api/posts/')
//                 .then(response => this.posts = response.data)
//                 .catch(error => console.log(error));
//         }
//     }
// }
</script>
