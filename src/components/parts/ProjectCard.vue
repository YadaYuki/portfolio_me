<template>
  <v-card class="project_card">
    <!-- TODO:Implement detail and Now Developing -->
    
    <v-img  v-bind:src="require('@/assets/'+project.image)"></v-img>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text>
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
        <v-btn :href="project.site_link" tile color="cyan"> View Site </v-btn>
        <v-btn :href="project.git_link" tile color="cyan"> View GitHub </v-btn>
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
  margin-top: 10px;
  min-width:200px;
  max-width:300px;
  .button_wrapper{
    display: flex;
    justify-content: space-around;
    height: 50px;
    a{
      margin-top:10px;
      width:120px;
      height: 30px;
    }
  }
}
</style>