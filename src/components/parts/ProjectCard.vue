<template>
  <v-card flat  class="project_card">
    <!-- TODO:Implement detail and Now Developing -->
    <v-img v-bind:src="require('@/assets/' + project.image)"></v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text class="text_wrapper">
      <div class="description">
        {{ project.description }}
      </div>
      <div class="subtitle"><strong>Role</strong></div>
      <div class="detail">
        {{ project.role }}
      </div>
      <div class="subtitle"><strong>Tool & Language</strong></div>
      <div class="detail">
        <!--TODO: 各ツールをボタンっぽくしたい -->
        {{ project.tool }}
      </div>
    </v-card-text>
    <div class="button_wrapper">
      <v-btn elevation="0" :href="project.site_link" tile color="cyan"> View Site </v-btn>
      <v-btn elevation="0" :href="project.git_link" tile color="cyan"> View GitHub </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
};
</script>
<style lang="scss" scoped>
.project_card {
  height: 500px;
  margin-top: 2em;
  border: 1px solid #eee;
  width: 300px;
  @media screen and (min-width: 500px) {
    .text_wrapper {
      height: 45%;
    }
  }
  .button_wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1em 0;
    a {
      margin-top: 10px;

    border-radius: 2px;
      width: 120px;
      height: 30px;
    }
  }
}
</style>