<template>
    <div class="header">
      <i class="icon iconfont">&#xe735;</i>
      <h3>登录</h3>
      <a href="#" @click="registerevent">{{registered}}</a>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return{
             registered:"注册"
          }
        },
        methods:{
            registerevent(){
                 this.$emit('change','hehe');
            }
        }
    }
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-family: "Arial Black";
  }
  .header i{}
  .header h3{
     font-size: 18px;
     color: #333333;
  }
  .header a{
     text-decoration: none;
     font-size: 16px;
     line-height: 28px;
     color: #333333;
  }
</style>
