<template>
  <!-- Default form login -->
  
  <div class="card-body mx-auto mt-2" id="formLogin"  style="width:30%">
      <h2 class="text-center">Sign In</h2>
            <form v-on:submit.prevent="login" >
                <div class="form-group">
                    <label  for="email">E-mail:</label>
                    <input v-model="inputEmail" type="email" class="form-control" id="email" required>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input v-model="inputPassword" type="password" class="form-control" id="pwd" required>
                </div>
                <center><button type="submit" class="btn btn-default" style="background-color: #0f0e0ec5; color : rgb(255, 255, 255);" >login</button></center>
                     
            </form>
             <hr>
                <hr>
                <center><span>Doesn't have an account?</span></center>
                <center><span>Register <a href="#" @click="showRegisterForm()" >here</a> </span></center>
            <hr>
    </div>
  
  <!-- Default form login -->
</template>
<script>
import axios from 'axios'

export default {
    
    data(){
        return {
            inputEmail : "",
            inputPassword : ""
        }
    },
    methods : {
        login(){
            console.log(this.inputEmail, this.inputPassword)
            let email = this.inputEmail
            let password = this.inputPassword
            axios({
                method : 'POST',
                url : `http://localhost:3000/users`,
                data :{
                    email, 
                    password
                }
            })
            .then(response=>{
                console.log(response.data)
                this.$emit('fromLoginFormLoginCond', true)
                localStorage.setItem('token',response.data)
            })
            .catch(err=>{
                console.log(err)
            })

        },
        showRegisterForm(){
            this.$emit('fromLoginFormRegisterCond', false)
        }
    }

}
</script>

<style>

</style>