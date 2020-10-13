<template>
  <div>
      <ProfileSubsectionTitle subsection_title="Certification" />
      <!-- For -->
      <CertificationItem v-for="certification in certifications" v-bind:certification="certification" :key="certification.id"/>
  </div>
</template>
<script>
import ProfileSubsectionTitle from "@/components/parts/ProfileSubsectionTitle.vue";
import CertificationItem from "@/components/parts/CertificationItem.vue"
import certifications from "@/assets/data/certification.json";

export default {
  name: "Certification",
  components: {
    ProfileSubsectionTitle,CertificationItem
  },
  data:()=>{
    return {certifications}
  }
};
</script>
<style scoped>
div{
  margin-top: 40px;
}
</style>