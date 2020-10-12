<template>
    <div>
        <Menu />
        <Header title="Profile" />
    </div>
</template>

<script>
import Header from "@/components/global/Header.vue"
import Menu from "@/components/global/Menu.vue"

export default {
    name:"Profile",
    components:{
        Header,Menu
    }
}
</script>