require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3000
const indexRoutes = require('./routes/indexRoutes')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
mongoose.connect('mongodb://localhost/MiniWp', {useNewUrlParser:true})

app.use(express.urlencoded({extended:false})) 
app.use(express.json())

app.use('/', indexRoutes)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log("listening to port 3000")
})

