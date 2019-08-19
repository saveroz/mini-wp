<template>
  <div v-if="isCreate">
    <b-container class="mt-4">
      <b-form @submit.prevent="createArticle">
        <div class="form-group d-flex justify-content-center">
          <input
            v-model="articleTitle"
            type="text"
            class="form-control sharea"
            placeholder="Enter title"
            style="width:40%; height: 40px; font-size: 20px; text-align: center; padding-bottom: 0;"
          />
        </div>
        <div class="mb-3">
          <input type="file" @change="previewFile" name="image" ref="file" accept="image/*" />
        </div>
        <div>
          <wysiwyg style="text-overflow:auto" v-model="articleContent"></wysiwyg>
        </div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    isCreate: Boolean
  },
  data() {
    return {
      articleTitle: "",
      articleContent: "",
      articleImage: ""
    };
  },
  methods: {
    createArticle() {
      let title = this.articleTitle;
      let content = this.articleContent;
      let image = this.articleImage;
      let featured_image = "";
      let token = localStorage.getItem("token");
    //   console.log(title, content);
      var bodyFormData = new FormData();
      bodyFormData.append("image", image);
      // console.log(bodyFormData)
      Swal.fire({
                title: 'Creating your article...',
                allowOutsideClick: () => !Swal.isLoading()
      })
      Swal.showLoading()

      axios({
          url : "http://localhost:3000/images/upload",
          method : "POST",
          data : bodyFormData
      })
      .then(response=>{
          console.log(response.data)
          featured_image = response.data.link
          return axios({
            url : "http://localhost:3000/articles",
            method : "POST",
            data : {
                title,content,featured_image
            },
            headers : {
                token
            }
        })
      })
      .then(response=>{
            console.log(response)
            this.articleTitle=""
            this.articleContent=""
            this.articleImage=""
            Swal.close()
            Swal.fire({
                    type: 'success',
                    title: 'You Have Created Article !',
                    showConfirmButton: false,
                    timer: 1500
            })
            this.$emit("addArticle", true)
            this.$emit("showPage", "AllArticle")
        })
      .catch(err=>{
          let message = (err.response.data.message)
                // swal("Error!", errMessage , "error")
                Swal.fire({
                    type: 'error',
                    title: 'failed created article!',
                    text : message
          })
      })

    },
    previewFile(event){
        this.articleImage = event.target.files[0]
    }
  }
};
</script>

<style scoped>
</style>