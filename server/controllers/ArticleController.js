const Article = require('../models/Article')



class ArticleController{


    static create(req, res, next){

        const {title,content} = req.body
        Article.create({title,content})
        .then(success=>{
            res.status(201).json(success)
        })
        .catch(next)
    }

    static delete(req, res, next){

        const id = req.body.id
        
        Article.findByIdAndDelete(id)
        .then(success=>{
            res.status(200).json(success)
        })
        .catch(next) 
    }

    static update(req, res, next){

        let id = req.body.id
        let updatedData = {}

        req.body.title && (updatedData.title =req.body.title)
        req.body.content && (updatedData.content =req.body.content)

        Article.findByIdAndUpdate(id, updatedData, {new:true})
        .then(success=>{
            res.status(200).json(success)
        })
        .catch(next)
    }

    static getAll(req, res, next){

        Article.find()
        .then(allArticle=>{
            res.status(200).json(allArticle)
        })
        .catch(next)
    }
}

module.exports = ArticleController



