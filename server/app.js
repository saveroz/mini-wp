if(!process.env.NODE_ENV||process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}
// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const indexRoutes = require('./routes/indexRoutes')
const errorHandler = require('./middleware/errorHandler')
const db_url = process.env.DB_URL

app.use(cors())

mongoose.connect(db_url, {useNewUrlParser:true})
.then(function(){
    console.log("db connected")
})
.catch(function(){
    console.log("db fail to connect")
})

app.use(express.urlencoded({extended:false})) 
app.use(express.json())

app.use('/', indexRoutes)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
    // console.log(process.env.SECRET)
})

