import Vue from "vue";
import VueRouter from "vue-router";
import HomeAmiibo from "../views/HomeAmiibo.vue";
import AmiiboList from "../views/AmiiboList.vue";
import AmiiboDetail from "../views/AmiiboDetail.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeAmiibo,
    },
    {
        path: "/liste",
        name: "list",
        component: AmiiboList,
    },
    {
        path: "/detail/:tail",
        name: "detail",
        component: AmiiboDetail,
    }
];

const router = new VueRouter({
    routes,
});

export default router;
