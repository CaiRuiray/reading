<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">分类</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">聊聊</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">购物车</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped>
    .tab{display: flex; position: fixed; bottom: 0px; left: 0px; right: 0px; height: 98px;background-color: white;}
    .tab .tab-item{ flex: 1;text-align: center;}
    .tab .tab-item span{ font-size: 18px}
</style>
