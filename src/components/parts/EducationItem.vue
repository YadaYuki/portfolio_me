<template>
  <div>
    <p>{{ education.start }} ~ {{ education.end }}</p>
    <h3>{{ education.school_name }}</h3>
    <p>
      {{ education.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "EducationItem",
  props: {
    education: Object,
  },
};
</script>
<style lang="scss" scoped>
div {
  margin-top: 30px;
  width:80%;
  p {
    color: #c4c4c4;
  }
  h3 {
    font-weight: 400;
  }
}
</style>