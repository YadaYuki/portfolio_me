<template>
  <div>
      <ProfileSubsectionTitle subsection_title="Education" />
      <EducationItem v-for="education in educations" v-bind:education="education" :key="education.id"/>
  </div>
</template>
<script>
import ProfileSubsectionTitle from "@/components/parts/ProfileSubsectionTitle.vue";
import EducationItem from "@/components/parts/EducationItem.vue"
import educations from "@/assets/data/education.json";
export default {
  name: "Experience",
  components: {
    ProfileSubsectionTitle,EducationItem
  },
  data:()=>{
    return {educations}
  }
};
</script>
<style scoped>
div{
  margin-top: 40px;
}
</style>