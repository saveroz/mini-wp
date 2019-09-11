const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title : {
        type : String,
        required : [true, "title required"]
    },
    content : {
        type : String,
        minlength :[200, "minimum character is 200"],
        required :[true, "content required"]
    },
    UserId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    featured_image : {
        type : String,
        required :[true, "image required"]
    },
    tags : [{
        type : String,
        required : [true, "tags required"]
    }]
},{
    timestamps : true,
    versionKey :false
})


const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article
