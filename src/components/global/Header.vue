<template>
  <div class="header_wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.header_wrapper {
  margin-top: 100px;
  margin-left: 100px;
  font-size: 25pt;
  h1 {
    font-weight: 100;
  }
  @media screen and (max-width: 500px) {
      text-align: center;
       margin-left: 0;
  }
}
</style>
