const express=require("express")
const app=express()
const cors=require("cors")
require('dotenv').config()
//middlewares
app.use(express.json()); 
app.use(cors({
    methods: "GET,POST,PUT,DELETE",
 
   
  }));

//routess
const videos=require('./routes/VideoRoutes')

//main entry...
app.use('/api/v1',videos)

module.exports=app