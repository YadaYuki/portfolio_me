<template>
  <div>
    <p>{{ event.month }}</p>
    <h3>{{ event.company_name }}</h3>
    <p>
      {{ event.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  props: {
    event: Object,
  },
};
</script>
<style lang="scss" scoped>
div {
  margin-top: 30px;
  width: 80%;
  h3 {
    font-weight: 400;
  }
  p {
    color: #c4c4c4;
  }
}
</style>