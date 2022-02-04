import React, { Component } from 'react';

export default class AddEmployee extends Component {
    constructor(props) {
      super(props)
      this.state = {
         employee:{Id:'',Name:'',Email:'',Salary:''}
      } }
    changeHandler=(event)=>{
            const name=event.target.name
            const value=event.target.value
           this.setState({
            employee:{
                ...this.state.employee,
                [name]:[value]
            }}) }
    onCreateEmployee=(event)=>{ console.log(this.state.employee) 
        event.preventDefault()}
  render() {
    return <div><h1>Add Employee</h1>
        <form>
            <div className='form-group col-6'>
                <label>Employee ID</label>
                <input type="text" name="Id" className='form-control' 
                value={this.state.employee.Id} 
                onChange={this.changeHandler}/>
            </div>
            <div className='form-group col-6'>
                <label>Employee Name</label>
                <input type="text" name="Name" className='form-control' value={this.state.employee.Name} onChange={this.changeHandler}/>
            </div>
            <div className='form-group col-6'>
                <label>Employee Email</label>
                <input type="text" name="Email" className='form-control' value={this.state.employee.Email} onChange={this.changeHandler}/>
            </div>
            <div className='form-group col-6'>
                <label>Employee Salary</label>
                <input type="text" name="Salary" className='form-control' value={this.state.employee.Salary} onChange={this.changeHandler}/>
            </div>
            <button className='btn btn-primary mt-2' onClick={this.onCreateEmployee}>Add Employee</button>
        </form>
       </div>;
  }
}
