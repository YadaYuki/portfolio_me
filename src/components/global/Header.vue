<template>
    <div class="header_wrapper">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:String
    }
}
</script>

<style lang="scss" scoped>
.header_wrapper{
    text-align: center;
    h1{
        margin:5px auto;
    }
}
</style>
