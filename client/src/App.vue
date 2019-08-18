<template>
  <div>
      <navbar v-bind:isLogin="isLogin" @fromLogOutButton="loginCondition" @fromChildren="triggerParent" :message="message"></navbar>
      <login v-if="!isLogin&&isLoginForm" @fromLoginFormLoginCond="loginCondition" @fromLoginFormRegisterCond="loginFormCondition"></login>
      <register v-if="!isLogin&&!isLoginForm" @fromRegisterForm="loginFormCondition" ></register>
      <articleList v-if="isLogin" :allArticles="allArticles"></articleList>
  </div>
</template>


<script>
import articleList from "./components/articleList.vue"
import navbar from "./components/navbar.vue";
import login from "./components/login.vue";
import register from "./components/register";
import axios from 'axios';

export default {
  components: {
    navbar,
    login,
    register,
    articleList
  },
  data() {
    return {
      isLogin: false,
      message: '',
      counter: 0,
      allArticles : [],
      userArticles : [],
      tempArticles: [],
      isLoginForm : true,
    };
  },
  methods: {
    triggerParent(number) {
        this.counter += number
        this.message = 'from parent' + this.counter
  
    },
    loginFormCondition(cond){
        this.isLoginForm = cond

    },
    loginCondition(cond){

        let token = localStorage.getItem('token')
        if (token){
            this.isLogin = true
        }
        else{
            if (cond){
                this.isLogin = true
            }
            else {
                this.isLogin = false
            }
        }
    },
    userArticle() {
        // this.allArticles = this.tempArticles.filter((el) => { return el._id == id user})
    }
    
  },
  created(){
      
    this.loginCondition(null)
    // console.log(this.isLogin)

    let token = localStorage.getItem('token')
    axios({
        url : "http://localhost:3000/articles",
        method : "GET",
        headers : {
            token
        }
    }).
    then(response=>{
        console.log(response.data)
        this.allArticles = response.data
        this.tempArticles = response.data
    })
    .catch(err=>{
        console.log(err)
    })
    
  }
};
</script>

<style scoped>
</style>