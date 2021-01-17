import Vue from "vue"
import VueRouter from "vue-router"
import Contact from "@/components/page/Contact.vue"
import Profile from "@/components/page/Profile"
import Work from "@/components/page/Work"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Profile
        },
        {
            path: "/contact",
            component: Contact
        },{
            path:"/work",
            component:Work
        }S
    ]
})