data={
  employee:require('../model/employees.json'),
  setEmployee:function(data) {this.employee=data}
}

const addemp=(req,res)=>{
  const newemp=data.employee.length?data.employee[data.employee-1].id+1:1,
  firstName=req.body.firstName,
  lastName=req.body.lastName
  if(!firstName || !lastName){
    res.status(404).send('data not found')
  }else{
    data.setEmployee([...data.employee,...newemp])
    res.status(200).send(res.json())
  }
}


const deleteemp=(req,res)=>{
  const employee=data.employee.find(emp=>emp.id===parseInt(req.body.id))
  if(!employee){
    res.status(404).send('not found')
  }
  const filter=data.employee.filter(emp=>emp.id===parseInt(req.body.id))
  data.setEmployee([...filter])
  res.json(data.employee)
}

const updateemp=(req,res)=>{
  const employee=data.employee.find(emp=>emp.id===parseInt(req.body.id))
  if(!employee){
    res.status(404).send('data not found')
  }
  if(req.body.firstName) employee.firstName=req.body.firstName;
  if(req.body.lastName) employee.lastName=req.body.lastName;
  const filter=data.employee.find(emp=>emp.id===parseInt(req.body.id))
  const msg=[...employee,filter]
  const sorting=msg.sort((a,b)=>a.id<b.id?1:a.id>b.id?-1:0)
  data.setEmployee(sorting)
  res.json(data.employee)
}

const oneemp=(req,res)=>{
  const emp=data.employee.find(emp=>emp.id===parseInt(req.params.id))
  if(!emp){
    res.status(404).send('data not found')

  }
  res.json(data.employee)
}

module.exports={addemp,updateemp,deleteemp,addemp,oneemp}