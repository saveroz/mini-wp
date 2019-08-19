<template>
<div>

<div class="card border-secondary mb-3 " style="display:flex;flex-direction:row;height:250px;border-width:3px;">
  <div class="card-body" style="width:50%">
    <h4 class="card-title">{{article.title}}</h4>
    <p class="card-text line-clamp" style="overflow:hidden;" v-html="article.content"> 
    </p>
    <p style="font-size:14px;"> Author : {{article.UserId.username}}</p>
    <p class="card-text"><small class="text-muted">{{new Date(article.createdAt).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</small></p>
    <button  v-on:click="detailedArticle(article)" class="btn btn-secondary btn-sm">details</button>
    <button v-if="isUserArticle" v-on:click="editArticle(article)"  class="btn btn-secondary btn-sm">edit </button>
    <button v-if="isUserArticle" v-on:click="removeArticle(article._id)" class="btn btn-secondary btn-sm">delete</button>
  </div>
  <div class="card-body" style="width:30%;display:flex;">
    <img :src="article.featured_image" >
  </div>
</div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    props : {
        article : Object,
        isUserArticle : Boolean
    },
    data(){
        return {

        }
    },
    methods : {
        removeArticle(id){
            let token = localStorage.getItem('token')
            console.log(id)

            axios({
                url : `http://localhost:3000/articles/${id}`,
                method :'DELETE',
                headers : {
                    token
                }
            }).
            then(response=>{
                console.log(response)
                this.$emit("removedArticle", id)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        editArticle(obj){
            this.$emit("editArticle", obj)
        },
        detailedArticle(obj){
            console.log("list item detail")
            this.$emit("detailedArticle",obj)
        }
    }

}
</script>

<style scoped>

</style>