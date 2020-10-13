<template>
  <div>
    <Menu />
    <Header title="Profile" />
    <div class="profile_wrapper">
      <ProfileItem />
      <div>
          <!-- TODO:use Vuetify Col -->
          <div>
          <Experience />
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile_wrapper {
  margin-left: 100px;
}
</style>

<script>
import Header from "@/components/global/Header.vue";
import Menu from "@/components/global/Menu.vue";
import ProfileItem from "@/components/parts/ProfileItem.vue";
import Experience from "@/components/parts/Experience.vue"

export default {
  name: "Profile",
  components: {
    Header,
    Menu,
    ProfileItem,
    Experience
  },
};
</script>