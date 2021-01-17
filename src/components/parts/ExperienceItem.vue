<template>
  <div>
    <p>{{experience.start}} ~ {{experience.end}}</p>
    <h3>{{experience.job_title}}</h3>
    <h3><a target="_blank" :href="experience.company_link">{{experience.company_name}}</a></h3>
    <p>
      {{experience.description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "ExperienceItem",
  props:{
      experience:Object
  }
};
</script>
<style lang="scss" scoped>
div{
    margin-top:30px;
    width:80%;
    h3{
        font-weight: 400;
        a{
            text-decoration: none;
            color:#D3CFFF;
        }
    }

}
</style>