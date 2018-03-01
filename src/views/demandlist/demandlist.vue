<template>
  <div>
      <Condit></Condit>
      <Choose  v-on:classification="synthesize_click3"></Choose>
      <Demandlist></Demandlist>
      <Popupwindow :message="Popup" v-on:change="ification"></Popupwindow>
  </div>
</template>

<script>
  import Condit from '../../components/conditionsresults/conditionsresults.vue'
  import Choose from '../../components/choose/choose_2.vue'
  import Demandlist from '../../components/rhecontentlist/Demandlist'
  import Popupwindow from '../../components/popupwindow/popupwindow.vue'
  export default {
    name: "tab",
    data(){
      return{
        Popup:{
          classification:false,
          product:false
        }
      }
    },
    methods:{
      synthesize_click3(data){
        this.Popup['classification'] = data
      },
      ification(data){
        this.Popup['product'] = data;
        this.Popup['classification'] = data;
      }
    },
    components:{
      Condit,
      Choose,
      Demandlist,
      Popupwindow
    }
  }
</script>

<style scoped>
</style>
