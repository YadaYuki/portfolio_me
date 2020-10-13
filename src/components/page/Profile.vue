<template>
  <div>
    <Menu />
    <Header title="Profile" />
    <div class="profile_wrapper">
      <ProfileItem />
      <div class="content_wrapper">
        <!-- TODO:use Vuetify Col -->
        <div>
          <Experience />
          <Education />
        </div>
        <div>
          <Skill />
          <Certification />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile_wrapper {
  margin-left: 100px;
}

.content_wrapper {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 50%;
    min-width: 300px;
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

export default {
  name: "Profile",
  components: {
    Header,
    Menu,
    ProfileItem,
    Experience,
    Education,
    Certification,
    Skill
  },
};
</script>