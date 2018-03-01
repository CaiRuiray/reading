<template>
  <div>
    <condition></condition>
    <Choose v-on:adrop-downbox="synthesize_click2" v-on:classification="synthesize_click3"></Choose>
    <Knowledge></Knowledge>
    <Popupwindow :message="Popup" v-on:change="ification"></Popupwindow>
  </div>
</template>

<script>
  import condition from '../../components/conditionsresults/conditionsresults.vue'
  import Popupwindow from '../../components/popupwindow/popupwindow.vue'
  import Choose from '../../components/choose/choose.vue'
  import Knowledge from '../../components/rhecontentlist/knowledge.vue'
  export default {
    name: "rank",
    data(){
        return{
          Popup:{
            classification:false,
            product:false
          }
        }
    },
    methods:{
      synthesize_click2(data){
          this.Popup['product'] = data
      },
      synthesize_click3(data){
          this.Popup['classification'] = data
      },
      ification(data){
          this.Popup['product'] = data;
          this.Popup['classification'] = data;
      }
    },
    components:{
      condition,
      Knowledge,
      Popupwindow,
      Choose
    }
  }
</script>

<style scoped>
  .menu_box {
    overflow: hidden;
    padding: 20px 0px;
  }
  .menu_box .menu_bd {
    padding: 0 15px;
  }
  .menu_box .menu_list {
    width: 25%;
    float: left;
    font-size: 18px;
    padding-bottom: 20px;
    text-align: center;
  }
  #synthesize_click3 img{
    width: 25px!important;
  }
  .menu_box .menu_list img {
    width: 15px;
    margin-left: 5px;
  }
  img, span, i {
    font-size: 18px;
    vertical-align: middle;
  }
</style>
