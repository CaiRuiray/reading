<template>
    <div class="menu_box">
      <div class="menu_bd">
        <div class="menu_list" id="synthesize_click1">
          <span>综合排序</span>
          <img src="../../common/image/hide12.png">
        </div>
        <div class="menu_list text-center" @click="synthesize_click2()">
          <span>产品类型</span>
          <img src="../../common/image/hide12.png">
        </div>
        <div class="menu_list text-center">
          <span>选择地区</span>
          <img src="../../common/image/hide12.png">
        </div>
        <div class="menu_list text-right" id="synthesize_click3" @click="synthesize_click3()">
          <img src="../../common/image/fenli.png">
          <span>分类</span>
        </div>
      </div>
    </div>
</template>



<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "tab",
    data(){
      return{

      }
    },
    methods:{
      synthesize_click2(){
         this.$emit('adrop-downbox',true)
      },
      synthesize_click3(){
         this.$emit('classification',true)
      }
    },
    computed:{
        message() {
       /*     var ceshi = []
            ceshi.push(this.$store.state.categories)
            this.tegories = ceshi;
            console.log(this.tegories);*/
        }
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
