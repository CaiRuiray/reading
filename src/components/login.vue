<template>
  <div>
      <Header v-on:change="registerevent" ></Header>
      <div class="login-header">
           <h3>傍晚好！欢迎登录：)</h3>
           <div class="label-from">
               <label>
                  <i class="icon iconfont">&#xe735;</i><input type="text" placeholder="用户名" v-model="username"/>
               </label>
               <label v-show="loginpassword_1">
                  <i class="icon iconfont">&#xe735;</i><input type="text" placeholder="手机号码" v-model="phonenumber"/>
               </label>
               <label v-show="verificationcode">
                  <i class="icon iconfont">&#xe735;</i><input type="text" placeholder="验证码"/>
                  <div class="get-verificationcode">
                      <span>获取验证码</span>
                  </div>
               </label>
               <label v-show="loginpassword">
                  <i class="icon iconfont">&#xe735;</i><input type="text" placeholder="密码" v-model="password"/>
               </label>
               <div class="label-from-password">
                  <span>{{registrationprompt}}</span>
                  <a href="javascript:void(0)" v-show="forgotpassword">忘记密码</a>
               </div>
               <button type="button" :class="variable" @click="login(thelogin)">{{thelogin}}</button>
               <h2 @click="loginfast" v-show="rapidlanding">{{ message }}</h2>
               <span class="useragreement" v-show="useragreement">点击注册表示你已阅读并同意用户协议</span>
           </div>
      </div>
      <div class="other_login" v-show="otherlogin">
           <div class="other_login_header">
                 <div class="line">
                     <small>其他登录方式</small>
                 </div>
           </div>
      </div>

  </div>
</template>
<script>

    import Header from './m-header/header'
    import axios from 'axios'
    export default {
         name: 'login',
         data(){
            return{
                username:'', //用户名
                password:'',  //密码
                phonenumber:'', //手机号码
                message:'手机快速登录',
                thelogin:'登陆',
                variable:'blue',
                registrationprompt:'',
                verificationcode:false,
                loginpassword_1:false,
                loginpassword:true,
                forgotpassword:true,
                useragreement:false,
                rapidlanding:true,
                otherlogin:true
            }
         },
         methods:{
             loginfast(){
                 this.verificationcode = true;
                 this.loginpassword_1 = false;
                 this.loginpassword = false;
                 this.variable = 'gray';
                 this.message = '账号密码登录'
             },
             login(thelogin){
                 if (thelogin == '登陆'){
                     axios.post("/api/users/login",{
                       username:this.username,
                       password:this.password
                     }).then((res)=>{
                       if (res["data"] == "登录成功"){
                          this.$store.commit('setToken','true');
                       /*   this.$store.dispatch('getUserInfo');*/

                          this.$router.push("/recommend")
                       }
                     })
                 }else {
                     axios.post("/api/users/registered",{
                       username:this.username,       //用户名
                       phonenumber:this.phonenumber, //手机号码
                       password:this.password,       //密码
                     }).then((res)=>{
                       console.log(res);
                     })
                 }
             },
             registerevent(data) {
                if (data){
                    this.verificationcode = true;
                    this.loginpassword = true;
                    this.forgotpassword = false;
                    this.useragreement = true;
                    this.rapidlanding = false;
                    this.otherlogin = false;
                    this.loginpassword_1 = true;
                    this.registrationprompt = '由6~20位英文字母、数字或符号组成';
                    this.thelogin = '注册';
                    this.variable = 'gray'
                }
             }
         },
        components:{
          Header
        }
    }
</script>

<style scoped>
  .login-header{
      margin-top: 80px;
  }
  .login-header .label-from{
      padding: 45px;
  }
  .login-header .label-from label{
      display: block;
      border-bottom: 1px solid #ececec;
      display: flex;
  }
  .login-header .label-from label{
      height: 60px;
      line-height: 60px;
      margin-bottom: 10px;
  }
  .login-header .label-from label .get-verificationcode span{
      line-height: 60px;
      border-left: 1px solid #ececec;
      padding-left: 10px;
      color: #1785da;
      font-size: 14px;
      position: relative;
      top: -10px;
  }
  .login-header .label-from button{
      width: 100%;
      height: 72px;
      border-top-style: none;
      border-right-style: none;
      border-bottom-style: none;
      border-left-style: none;
      border-radius: 5px;
      margin-top: 55px;
      color: white;
  }
  .login-header h3{
      text-align: center;
      font-size: 26px;
      color: #1785da;
  }
  .login-header h2{
    text-align: center;
    font-weight: normal;
    font-size: 12px;
    margin-top: 50px;
  }
  .login-header .label-from label input{
      height: 59px;
      line-height: 59px;
      font-size: 18px;
      border: none;
      flex: 1;
  }
  .other_login{
      position: fixed;
      width: 100%;
      bottom: 145px;
  }
  .other_login .other_login_header{
      width: 100%;
      text-align: center;
  }
  .other_login .other_login_header .line{
      border-top: 1px solid #ececec;
      position: relative;
  }
  .other_login .other_login_header small{
      position: relative;
      top: -62px;
      padding: 8px;
      background: #ffffff;
      font-size: 12px;
  }
  .label-from-password{
      display: flex;
  }
  .label-from-password a{
      text-decoration: none;
      font-size: 12px;
      color: #333333;
  }
  .label-from-password span{
      flex: 1;
      font-size: 12px;
  }
  .useragreement{
      font-size: 12px;
      display: inherit;
      line-height: 56px;
  }
  .gray{
      background-color: #cccccc;
  }
  .blue{
      background-color: #0398e9;
  }

</style>
