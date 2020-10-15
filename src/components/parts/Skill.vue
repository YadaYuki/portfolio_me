<template>
  <div class="skill_wrapper">
      <ProfileSubsectionTitle subsection_title="Skill" />
      <div class="skill_item_wrapper">
      <SkillItem v-for="skill in skills" v-bind:skill="skill" :key="skill.id"/>
      </div>
  </div>
</template>
<script>
import ProfileSubsectionTitle from "@/components/parts/ProfileSubsectionTitle.vue";
import SkillItem from "@/components/parts/SkillItem.vue";
import skills from "@/assets/data/skills.json";
export default {
  name: "Skill",
  components: {
    ProfileSubsectionTitle,
    SkillItem,
  },
  data: () => {
    return { skills };
  },
};
</script>
<style lang="scss" scoped>
.skill_wrapper {
  margin-top: 40px;
  .skill_item_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>