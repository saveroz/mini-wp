const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { generatePass } = require('../helpers/encryptPass')

const ArticleSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required :true
    },
    UserId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    featured_image : {
        type : String,
        required :true}
},{
    timestamps : true,
    versionKey :false
})


const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article