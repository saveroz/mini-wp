// $(document).ready(function () {
const serverUrl = "http://localhost:3000"

var app = new Vue({
    el: '#app',
    components: {
        wysiwyg: vueWysiwyg.default.component,
    },
    data: {
        articles:[],
        filteredArticles:[],
        message: 'Hello Vue!',
        isArticles: false,
        isTextEditor: false,
        isEditForm:false,
        content:"",
        title:"",
        filter:"",
        objEdited:{}
        
    },
    methods: {
        showTextEditor: function () {
            this.isTextEditor = true;
            this.isArticles = false;
            this.isEditForm = false;
        },
        showArticles: function () {
            // console.log('show articles')
            this.isArticles = true;
            this.isTextEditor = false;
            this.isEditForm = false;
        },
        showEditForm: function(event,objEdited){
            this.isArticles = false;
            this.isTextEditor = false;
            this.isEditForm = true;
            this.objEdited = objEdited;
            console.log(this.objEdited)

        },
        createArticles : function(){
            let title = this.title
            let content = this.content

            event.preventDefault()
            axios.post(`${serverUrl}/articles`, {title,content})
            .then(success=>{
                console.log(success.data)
                this.articles.push(success.data)
                console.log(this.articles)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        deleteArticle : function (event, articleId){
            
            let id = articleId
            // console.log(articleId)
            axios.delete(
                `${serverUrl}/articles`,
                {data :{
                    'id':id
                }
            })
            .then(success=>{
                console.log(success.data._id)
                let deletedArticleId = success.data._id
                let newArticle = []
                for (let article of this.articles){
                    if(article._id!==deletedArticleId){
                        newArticle.push(article)
                    }
                }
                this.articles = newArticle.slice()
            })
            .catch(err =>{
                console.log(err)
            })
        },
        editArticle : function(event,articleId){
            
            let title = this.title
            let content = this.content
            let id = articleId

            event.preventDefault()
            axios.patch(`${serverUrl}/articles`, {id,title,content})
            .then(success=>{
                console.log(success.data)
                // this.articles.push(success.data)
                // console.log(this.articles)
            })
            .catch(err=>{
                console.log(err)
            })
        } 

    },
    created: function () {

        axios.get(`${serverUrl}/articles`).
            then(allArticles => {
                // console.log(allArticles.data)
                this.articles = allArticles.data
                this.filteredArticles = allArticles.data
                // console.log(this.articles)
            })
            .catch(err => {
                // console.log(err.message)
            })
    },
    watch : {
        filter(a,b){

            // let filteredArticles = this.articles.slice()
            let regex = new RegExp(a, 'i')
            this.articles = this.filteredArticles.filter(el => regex.test(el.title))
        }
    }
})


// })