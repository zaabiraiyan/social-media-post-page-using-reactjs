const express=require('express')
const app=express()
const PORT=process.env.PORT || 3400;
const path=require('path');
const { logEvents, logz } = require('./middleware/logEvents');
const cors=require('cors');
const errorHandler = require('./middleware/error');
const routes=require('./routes/subdir');
const routers = require('./routes/root');
const routerz = require('./routes/api/employee');

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))
app.use('/subdir',routes)
app.use('/employee',routerz)

const whitelist=['https://www.google.com','http://localhost:3400']
const optioncors={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1 || !origin ){
            callback(null,true)
        }else{
            callback(newError('notaccess'))
        }
    },OptionSucessState:200
}

app.use('/',routers)



app.get('/zaabi',(req,res,next)=>{
    console.log('potta');
    next()
},(req,res)=>{
    res.send('hello')
})

const one=(req,res,next)=>{
    console.log(one)
    next()
}
const two=(req,res,next)=>{
    console.log(two)
    next()
}
const three=(req,res,next)=>{
    console.log(three)
    res.send("ok")
}


app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts(html)){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts(json)){
        res.json("error : notfound")
    }else{
        res.type(txt).send('notfound')
    }
})
app.use(errorHandler)
app.get('/chaining(.html)?',[one,two,three])















app.listen(PORT,err=>{
    if(err){
        console.error(err)
    }else{

        console.log('rumming sucessfully',PORT)
    }
})