<template>
  <div class="row  mb-4 pt-5 px-5" style="border:10px solid #343a40;">
    <div class="col-6 mb-5">
      <h4 class="card-title">{{article.title}}</h4>
      <p class="card-text line-clamp" style="overflow:hidden;" v-html="article.content"></p>
      <p style="font-size:14px;">Author : {{article.UserId.username}}</p>
      <p class="card-text">
        <small
          class="text-muted"
        >{{new Date(article.createdAt).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</small>
      </p>
      <div style="display:flex;justify-content:space-around">
      <p>tags : </p>
      
        <a href="#" @click="searchByTag(tag)"   v-for="(tag,i) in article.tags" :key="i">
        <vs-chip>{{tag}}</vs-chip>
        </a>
      
      </div>
     
      <button v-on:click="detailedArticle(article)" class="btn btn-secondary btn-sm">details</button>
      <button
        v-if="isUserArticle"
        v-on:click="editArticle(article)"
        class="btn btn-secondary btn-sm"
      >edit</button>
      <button
        v-if="isUserArticle"
        v-on:click="removeArticle(article._id)"
        class="btn btn-secondary btn-sm"
      >delete</button>
    </div>
    <div class="col-6">
      <img class="img-fluid mb-5" :src="article.featured_image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    article: Object,
    isUserArticle: Boolean
  },
  data() {
    return {};
  },
  methods: {
    removeArticle(id) {
      let token = localStorage.getItem("token");
      console.log(id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          return axios({
            url: `http://localhost:3000/articles/${id}`,
            method: "DELETE",
            headers: {
              token
            }
          })
            .then(response => {
              console.log(response);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.$emit("removedArticle", id);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    editArticle(obj) {
      this.$emit("editArticle", obj);
    },
    detailedArticle(obj) {
      console.log("list item detail");
      this.$emit("detailedArticle", obj);
    },
    searchByTag(tag){
      this.$emit("searchByTag", tag)

    }

  }
};
</script>

<style scoped>
</style>
