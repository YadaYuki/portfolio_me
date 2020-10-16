<template>
  <div>
    <Menu />
    <div class="home_line">
      <h1>Welcome to <br> Yuki Yada's Portfolio</h1>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/global/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu,
  },
};
</script>
<style lang="scss" scoped>
.home_line {
  margin-top: 35vh;
  width:100%;
  text-align: center;
  h1{
    line-height: 2em;
  }
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.03em;
    background-color: #0c5eff;
    animation: SlideIn 2s;
    animation-timing-function: ease;
    opacity: 0;
  }
}
@keyframes SlideIn {
  0% {
    opacity: 1;
    transform: translateX(-200vh);
  }
  100% {
    opacity: 1;
    transform: translateX(200vh);
  }
}
</style>