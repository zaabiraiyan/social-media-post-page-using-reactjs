const whitelist=["http://localhost:3500/","https://www.google.com"]
const optioncors={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!== -1 ||!origin){
            callback(null,true)
        }else {
            callback(new Error('not found'))
        }
    },optionSucess:200

}

