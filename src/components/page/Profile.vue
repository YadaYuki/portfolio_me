<template>
  <div>
    <Menu />
    <Header title="Profile" />
    <div class="profile_wrapper">
      <ProfileItem />
      <div class="content_wrapper">
        <div>
          <Experience />
          <Education />
        </div>
        <div>
          <!-- <Publication /> -->
          <Skill />
          <FieldsOfStudy />
          <Certification />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile_wrapper {
  margin-left:100px;
  .content_wrapper {
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 50%;
      min-width: 300px;
    }
    @media screen and (max-width: 500px) {
      justify-content: center;
    }
  }
  @media screen and (max-width: 500px) {
      margin:0;
    }
}
</style>
<script>
import Header from "@/components/global/Header.vue";
import Menu from "@/components/global/Menu.vue";
import ProfileItem from "@/components/parts/ProfileItem.vue";
import Experience from "@/components/parts/Experience.vue";
import Education from "@/components/parts/Education.vue";
import Skill from "@/components/parts/Skill.vue";
import Certification from "@/components/parts/Certification.vue";
import FieldsOfStudy from "@/components/parts/FieldsOfStudy.vue";

export default {
  name: "Profile",
  components: {
    Header,
    Menu,
    ProfileItem,
    Experience,
    Education,
    Certification,
    Skill,
    FieldsOfStudy,
  },
};
</script>