<template>
  <div>
    <Menu />
    <Header title="Work" />
    <div class="project_list_wrapper">
        <!-- https://jp.vuejs.org/v2/guide/#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E6%A7%8B%E6%88%90 -->
        <ProjectCard v-for="project in projects" v-bind:project="project" :key="project.id" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header.vue";
import Menu from "@/components/global/Menu.vue";
import ProjectCard from "@/components/parts/ProjectCard.vue";
import projects from "@/assets/project.json";

export default {
  name: "Work",
  components: {
    Header,
    Menu,
    ProjectCard,
  },
  data: () => {
    return { projects };
  },
};
</script>
<style lang="scss">
.project_list_wrapper {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>