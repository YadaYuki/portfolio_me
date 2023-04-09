import Vue from "vue"
import VueRouter from "vue-router"
import Profile from "@/components/page/Profile"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Profile
        },
    ]
})