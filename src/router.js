import { createWebHashHistory, createRouter } from 'vue-router';

const Home = '';

const routes = [
    {path: '/', component: Home},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export {router}