<template>
  <div>
    <p>{{ certification.time }}</p>
    <h3>{{ certification.title }}</h3>
    <p>
      {{ certification.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CertificationItem",
  props: {
    certification: Object,
  },
};
</script>
<style lang="scss" scoped>
div {
  margin-top: 30px;
  width:80%;
  h3 {
    font-weight: 400;
  }
  
}
</style>