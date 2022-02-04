import { useFormik } from 'formik';
import React from 'react';

const validateEmployee=(empData)=>{
const errors={}
let npattern=/^([a-zA-Z]+)$/
if(!empData.Name){
    errors.Name="Name is required"
}
else if(!npattern.test(empData.Name)){
    errors.Name="Alphabets only"
}
if(!empData.Email){
    errors.Email="Email required"
}
if(!empData.Salary){
    errors.Salary="Salary required"
}
else if(empData.Salary.length>8){
    errors.Salary="Max length is 8 char"
}
return errors  
}
const Formusingformik=()=> {
    const formik=useFormik({
        initialValues:{
            Id:'',Name:'',Email:'',Salary:''},
        validate:validateEmployee,
        onSubmit:(values)=>{alert(JSON.stringify(values))}
    })
  return  <div><h1>Add Employee using formik</h1>
  <form onSubmit={formik.handleSubmit}>
      <div className='form-group col-6'>
          <label>Employee ID</label>
          <input type="text" name="Id" className='form-control' value={formik.values.Id}
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
      <div className='form-group col-6'>
          <label>Employee Name</label>
          <input type="text" name="Name" className='form-control' value={formik.values.Name}
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
         {formik.touched.Name && formik.errors.Name ? <span style={{color:"red"}}>{formik.errors.Name}</span>:null}
      </div>
      <div className='form-group col-6'>
          <label>Employee Email</label>
          <input type="text" name="Email" className='form-control' value={formik.values.Email}
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
           {formik.touched.Email && formik.errors.Email ? <span style={{color:"red"}}>{formik.errors.Email}</span>:null}
          </div>
      <div className='form-group col-6'>
          <label>Employee Salary</label>
          <input type="text" name="Salary" className='form-control' value={formik.values.Salary}
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
           {formik.touched.Salary && formik.errors.Salary ? <span style={{color:"red"}}>{formik.errors.Salary}</span>:null}
      </div>
      <button type="submit" className='btn btn-primary mt-2'>Add Employee</button>
  </form>
 </div>
}

export default Formusingformik