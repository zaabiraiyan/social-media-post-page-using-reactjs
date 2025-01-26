const express=require('express')
const routers=express.Router()
const path=require('path')

routers.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})
routers.get('^/new-page$|/new-page(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','new-page.html'))
})
routers.get('/oldpage(.html)?',(req,res)=>{
    res.redirect(301,'new-page')
})

routers.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','404.html'))
})




module.exports=routers;