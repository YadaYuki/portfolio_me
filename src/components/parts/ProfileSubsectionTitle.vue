<template>
<!-- TODO: add custom color -->
  <h3><v-icon color="primary">mdi-flag</v-icon>{{subsection_title}}</h3>
</template>

<script>
export default {
  name: "ProfileSubsectionTitle",
  props: {
    subsection_title: String,
  },
};
</script>
<style lang="scss" scoped>
h3{
    line-height: 25px;
    i{
        height:25px;
        margin-bottom: 2px;
        margin-right:4px;
    }
}
</style>