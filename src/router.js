import { createWebHashHistory, createRouter } from 'vue-router';
import HomeView from "./views/HomeView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
const routes = [
    {path: '/', component: HomeView},
    {
        path: '/project/:id',
        name: 'project',
        component: SingleProjectView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export {router}