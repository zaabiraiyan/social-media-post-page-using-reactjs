//building api
const express=require('express')
const routers=express.Router()
const path=require('path')
const employeecontroller=require('../../controllers/employeecontroller')

routers.route('/')
.get(employeecontroller.allemp)
.post(employeecontroller.addemp)
.delete(employeecontroller.deleteemp)
.put(employeecontroller.updateemp)
routers.route('/:id')
.get(employeecontroller.oneemp)

module.exports=routers 
/* const express=require('express')
const routerz=express.Router()
const path=require('path')

model={}
model.employees=require('../../model/employees.json')
routerz.route('/')
.get((req,res)=>
    res.json(model.employees)
)
.post((req,res)=>
    res.json({
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })
)
.delete((req,res)=>
    res.json({
        id:req.body.id
    })
)

routerz.route('/:id')

.get((req,res)=>
res.json({
    id:req.params.id
})
)

module.exports=routerz; */