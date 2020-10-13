<template>
  <div class="fields_of_study_wrapper">
      <ProfileSubsectionTitle subsection_title="Fields of Study" />
      <div class="fields_of_study_item_wrapper">
      <SkillItem v-for="skill in fields_of_studies" v-bind:skill="skill" :key="skill.id"/>
      </div>
  </div>
</template>
<script>
import ProfileSubsectionTitle from "@/components/parts/ProfileSubsectionTitle.vue";
import SkillItem from "@/components/parts/SkillItem.vue";
import fields_of_studies from "@/assets/data/fields_of_study.json";
export default {
  name: "FieldsOfStudy",
  components: {
    ProfileSubsectionTitle,
    SkillItem,
  },
  data: () => {
    return { fields_of_studies };
  },
};
</script>
<style lang="scss" scoped>
.fields_of_study_wrapper {
  margin-top: 40px;
  .fields_of_study_item_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>