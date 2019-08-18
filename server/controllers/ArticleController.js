const Article = require('../models/Article')

class ArticleController{


    static create(req, res, next){

        // console.log(req.body,"masuk article controller")
        let UserId = req.decode.id
        const {title,content,featured_image} = req.body
        Article.create({UserId,title,content,featured_image})
        .then(success=>{
            res.status(201).json(success)
        })
        .catch(next)
    }

    static delete(req, res, next){

        const id = req.params.id
        
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

    static getAllUserArticle(req, res, next){

        let UserId = req.decode.id

        Article.find({UserId})
        .then(allUserArticle=>{
            res.status(200).json(allUserArticle)
        })
        .catch(next)
    }
}

module.exports = ArticleController



