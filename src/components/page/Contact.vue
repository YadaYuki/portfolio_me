<template>
  <div>
    <Menu />
    <Header title="Contact" />
    <div class="contact_wrapper">
      <v-form>
        <div class="contact_form_wrapper">
          <div class="user_info_wrapper">
            <label for="email">Email</label>
            <v-text-field
              flat
              outlined
              solo
              name="email"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <label for="name">Name</label>
            <v-text-field
              flat
              outlined
              solo
              name="name"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
            <label for="name">Subject</label>
            <v-text-field
              flat
              outlined
              solo
              name="subject"
              prepend-inner-icon="mdi-text-subject"
            ></v-text-field>
          </div>
          <div class="message_wrapper">
            <label>Body</label>
            <v-textarea flat outlined solo name="body"></v-textarea>
            <v-btn elevation="0" > Submit </v-btn>
            <!-- TODO:Send Mail -->
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header.vue";
import Menu from "@/components/global/Menu.vue";

export default {
  name: "Contact",
  components: {
    Header,
    Menu,
  },
};
</script>
<style lang="scss" scoped>
.contact_wrapper {
  margin: 50px 100px 0;
  .contact_form_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > div {
      min-width: 500px;
      button {
        float: right;
      }
    }
    @media screen and (max-width: 500px) {
      justify-content: center;
      > div {
        min-width: 300px;
      }
    }
  }
}
</style>