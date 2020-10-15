<template>
  <div>
    <Menu />
    <div class="home_line">
      <h1>Welcom to <br> Yuki Yada's Portfolio</h1>
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
  margin-top: calc(35vh);
  margin-left:100px;
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
    animation-timing-function: ease-in-out;
    opacity: 0;
  }
}
@keyframes SlideIn {
  0% {
    opacity: 0;
    transform: translateX(-100vh);
  }
  50% {
    opacity: 0.5;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(200vh);
  }
}
</style>