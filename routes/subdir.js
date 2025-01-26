const express=require('express')
const routes=express.Router()
const path=require('path')

routes.get('^/$|index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','subdir','index.html'))
})
routes.get('^/test$|test(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','subdir','test.html'))
})

module.exports=routes;