const express = require('express')
const router = express.Router()
const articleRoutes = require('../routes/articleRoutes')

router.get('/', function(req,res){
    res.send('homepage')
})

router.use('/articles', articleRoutes)





module.exports = router