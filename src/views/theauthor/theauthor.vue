<template>
  <div>
    <Condit></Condit>
    <Choose></Choose>
  </div>
</template>

<script>
  import Condit from '../../components/conditionsresults/conditionsresults.vue'
  import Choose from '../../components/choose/choose.vue'
  export default {
    name: "singer",
    components:{
      Condit,
      Choose
    }
  }
</script>

<style scoped>

</style>
