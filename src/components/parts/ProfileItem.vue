<template>
  <div class="profile_item_wrapper">
    <div class="image_wrapper">
      <img v-bind:src="require('@/assets/yadayuki.jpg')" />
    </div>
    <div class="description_wrapper">
      <!-- Name -->
      <h3>Yuki Yada/矢田宙生</h3>
      <p>
        A software developer <br />
        Designer / Engineer
      </p>
      <!-- title -->
      <!-- TODO:change to for  -->
      <ul>
        <li>
          <a href="https://www.facebook.com/yuki.yada.904" target="_brank"><v-icon>mdi-facebook</v-icon></a>
        </li>
        <li>
          <a href="https://twitter.com/YADAYUKI2" target="_brank"><v-icon>mdi-twitter</v-icon></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yukiyada/" target="_brank"><v-icon>mdi-linkedin</v-icon></a>
        </li>
        <li>
          <a href="https://github.com/YadaYuki/" target="_brank"><v-icon>mdi-github</v-icon></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile_item_wrapper {
  width: 300px;
  margin-top:30px;
  display: flex;
  .image_wrapper {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .description_wrapper {
    width: 60%;
    margin-left: 10px;
    h3{
        font-weight: 400;
    }
    ul{
        margin-top:5px;
        list-style: none;
        display: flex;
        li{
            margin:0 2px 0;
            a{
                text-decoration: none;
            }
        }
    }
  }
}
</style>
<script>
export default {
  name: "ProfileItem",
};
</script>