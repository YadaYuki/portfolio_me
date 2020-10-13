<template>
  <!-- TODO:add style by Vuetify -->
  <div>
    <img height="20" v-bind:src="require(`@/assets/${skill.image_svg}`)">
    <p>{{skill.name}}</p>
    <ul>
      <li v-for="n of 5" :key="n">
        <v-icon v-if="n <= skill.level" style="color: #1af6c2"> mdi-star </v-icon>
        <v-icon v-else> mdi-star-outline </v-icon>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
div {
  width:150px;
  margin-top: 40px;
  p{
      line-height: 20px;
      img{
          height: 20px;
      }
  }
  ul {
    margin-top: 1px;
    list-style: none;
    display: flex;
    li {
      margin: 0 0.5px 0;
    }
  }
}
</style>
<script>
export default {
  name: "SkillItem",
  props: {
    skill: Object,
  },
};
</script>