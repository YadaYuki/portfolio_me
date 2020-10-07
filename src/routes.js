import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/page/Home.vue"
import Contact from "./components/page/Contact.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/contact",
            component: Contact
        }
    ]
})