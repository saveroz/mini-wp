<template>
  <div  class="container">
    <div style="display:flex;justify-content:center">
      <h2 class="mt-3 mb-4">{{articleDetailObj.title}}</h2>
    </div>
    <div class="ArticleContent" >
      <div v-html="articleDetailObj.content" style="text-align:justify;"></div>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        articleDetailObj: Object
    }
};
</script>

<style scoped>
</style>