<template>
    <div>        
        <Menu />
        <Header title="Contact" />
    </div>
</template>

<script>
import Header from "@/components/global/Header.vue"
import Menu from "@/components/global/Menu.vue"

export default {
    name:"Contact",
    components:{
        Header,Menu
    }
}
</script>