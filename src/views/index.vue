<template>
  <div class="wrapper">
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
    <v-head></v-head>
  </div>
</template>

<script>
    import vHead from '../components/tab/tab'
    export default {
        name: "index",
        components:{
          vHead
        }
    }
</script>

<style scoped>
  .content{
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 1.306667rem;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .content::-webkit-scrollbar{width: 2px;}
  .content::-webkit-scrollbar-track{width: 2px}
  .content::-webkit-scrollbar-thumb{background-color:#f3f3f5; width: 2px}
  .content::-webkit-scrollbar-thumb:hover {width: 2px}
  .content::-webkit-scrollbar-thumb:active {background-color:#f3f3f5;width: 2px}
</style>
