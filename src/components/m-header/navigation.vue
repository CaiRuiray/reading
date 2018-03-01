<template>
  <div class="menu_box">
    <div class="menu">
      <div to="/knowledge" class="menu_list" @click="knowledgeofproducts"><img src="../../common/image/chanping.png">
        <div>知识产品</div>
      </div>
      <router-link to="/demandlist" class="menu_list"><img src="../../common/image/fenlei.png">
        <div>需求定制</div>
      </router-link>
      <router-link to="/theauthor" class="menu_list"><img src="../../common/image/xuqiu.png">
        <div>作者</div>
      </router-link>
      <router-link to="/knowledge" class="menu_list"><img src="../../common/image/zuozhe.png">
        <div>分类</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab",
    methods:{
      knowledgeofproducts(){
          this.$store.state.categories = true;
          this.$router.push('/knowledge')
      }
    }
  }
</script>

<style scoped>
  .menu_box {
    padding: 10px;
    background: #fff;
  }
  .menu_box .menu {
    overflow: hidden;
    display: flex;
  }
  .menu_box .menu_list {
    text-align: center;
    color: #666666;
    font-size: 18px;
    padding-top: 10px;
    flex: 1;
  }
  .menu_box .menu_list img {
    width: 60px;
    margin-bottom: 0.1rem;
  }
</style>
