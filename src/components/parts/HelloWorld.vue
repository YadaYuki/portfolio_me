<template>
  <div class="hello">
    
    <router-link to="contact">Contact</router-link>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
