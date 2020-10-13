<template>
  <div>
      <ProfileSubsectionTitle subsection_title="Experience" />
      <!-- For -->
      <ExperienceItem v-for="experience in experiences" v-bind:experience="experience" :key="experience.id"/>
  </div>
</template>
<script>
import ProfileSubsectionTitle from "@/components/parts/ProfileSubsectionTitle.vue";
import ExperienceItem from "@/components/parts/ExperienceItem.vue"
import experiences from "@/assets/data/experience.json";

export default {
  name: "Experience",
  components: {
    ProfileSubsectionTitle,ExperienceItem
  },
  data:()=>{
    return {experiences}
  }
};
</script>