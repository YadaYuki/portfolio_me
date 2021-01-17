<template>
  <div class="fuga">
    <ProfileSubsectionTitle subsection_title="Internship・Event" />
    <!-- For -->

      <EventItem v-for="event in events" v-bind:event="event" :key="event.id" />

  </div>
</template>
<script>
import ProfileSubsectionTitle from "@/components/parts/ProfileSubsectionTitle.vue";
import EventItem from "@/components/parts/EventItem.vue";
import events from "@/assets/data/event.json";

export default {
  name: "Event",
  components: {
    ProfileSubsectionTitle,
    EventItem,
  },
  data: () => {
    return { events };
  },
};
</script>
<style lang="scss" scoped>
div {
margin-top:40px;

}
</style>