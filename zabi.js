const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')
const {logz}=require('./middleware/logEvents')
const PORT=process.env.PORT || 3500;
const error=require('./middleware/error')
const routes=require('./routes/subdir')
const router=require('./routes/root')

const routersz=require('./routes/api/employee')
app.use(logz)


const whitelist=['http://localhost:3500/','http://127.0.0.1:5500/','https://www.google.com']
const optioncors={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('cors not found'))
        }
    },optionSuccessStatus:200
}
app.use(cors(optioncors))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))


app.use('/subdir',routes)
app.use('/',router)
app.use('/employee',routersz)



app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }
    else if(req.accepts('json')){
        res.json('error not found')
    }
    else{
        res.type(txt).send('not found')
    }
})
app.use(error)
app.listen(PORT,()=>{
    console.log(`running successfully ${PORT}`)
})