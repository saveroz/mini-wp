const Article = require('../models/Article')

class ArticleController{


    static create(req, res, next){

        // console.log(req.body,"masuk article controller")
        let UserId = req.decode.id
        let featured_image=null
        if (req.file){
            featured_image = req.file.cloudStoragePublicUrl
        }
        const {title,content} = req.body
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

        let id = req.params.id
        let updatedData = {}
        
        if (req.file){
            req.file.cloudStoragePublicUrl && (updatedData.featured_image=req.file.cloudStoragePublicUrl)
        }
        req.body.title && (updatedData.title =req.body.title)
        req.body.content && (updatedData.content =req.body.content)

        Article.findByIdAndUpdate(id, updatedData, {new:true})
        .then(success=>{
            res.status(200).json(success)
        })
        .catch(next)
    }

    static getAll(req, res, next){
        

        Article.find().populate("UserId")
        .then(allArticle=>{
            console.log("masuk ke get all article")
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



