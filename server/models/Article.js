const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { generatePass } = require('../helpers/encryptPass')

const ArticleSchema = new Schema({
    title : String,
    content : String
},{
    timestamps : true,
    versionKey :false
})


const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article