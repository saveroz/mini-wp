const Article = require('../models/Article')


function authorization(req,res,next){
    
    console.log('authorization')
    let id = req.params.id
    Article.findOne({
        '_id':id,
        'UserId': req.decode.id 
    })
    .then(article=>{
        console.log(article)
        if (!article){
            console.log('masuk ke null')
            res.status(401).json(`${req.decode.username} not authorized please check carefully`)
        }
        else{
            next()
        }
        
    })
    .catch(err=>{
        console.log("masuk ke catch")
        res.status(500).json(err)
    })
}

module.exports = authorization