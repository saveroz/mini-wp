const jwt = require('jsonwebtoken')
const Secret=process.env.SECRET
const User = require('../models/User')

function authentication(req,res,next){    
    try {
        console.log("authentication")
        // console.log(process.env.SECRET)
        // console.log(req.headers.token)
        const token = req.headers.token
        const decode = jwt.verify(token, Secret)
        // console.log(decode)
        req.decode = decode
        let id = req.decode.id
        console.log(id)

        User.findById(id)
        .then(user=>{
            
            if(user){
                console.log("masuk ke user")
                next()
            }
            else{
                res.status(401).json({
                    message : 'You are not authenticated Users'
                })
            }
        }).catch(err=>{
            console.log(err)
        })
        
    }
    catch{
        // console.log(req.headers.token)
        res.status(401).json({
            message: 'You are not authenticated User'
        })
       
    }
    
}

module.exports = authentication