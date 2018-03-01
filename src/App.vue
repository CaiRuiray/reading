<template>
  <div id="app">
    <router-view/>

    <div>
   <!--   <Tab v-show="islogin"></Tab>-->
    </div>
  </div>
</template>

<script>
/*  import Tab from './components/tab/tab'*/
  export default {
    name: 'App',
    data(){
      return{

      }
    },
    created(){

    },
    methods:{

    },
    components:{
       /* Tab*/
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
