const express=require('express')
const app=express();
const port=3000
app.get("/",function(req,res){
    res.json({
        "name":"hello"
    })
})
app.listen(port,function(req,res){
    console.log("app is running on server")
})