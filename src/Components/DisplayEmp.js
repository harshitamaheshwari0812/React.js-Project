import React, { Component } from 'react';
import Department from "./Department"
import SalaryEmp from './SalaryEmp';
export default class DisplayEmp extends Component {
    // state={count:parseInt(this.props.count)}
    constructor(props) {
      super(props)
          this.state = { count:parseInt(this.props.count), 
            totalSal:parseInt(this.props.basicsal)+parseInt(this.props.hra)+parseInt(this.props.sa)}  }   
    addEmployee=()=>{ // alert("button clicked")
        this.setState({count:this.state.count+1})  // alert(this.state.count) 
      }
      getUpdatedSal=(sal)=>{ // sal=totalsal
        this.setState({totalSal:sal})
      }
  render() {
    return <div>
          <h1>Employee Details (class Comp)</h1>    
          <button onClick={this.addEmployee} className='btn btn-primary'>Add Employee</button> 
          <p>Add Button Button Clicked {this.state.count} times</p>
  <table className='table table-bordered'>
    <tr><th>ID</th><th>Name</th><th>Total Salary</th></tr>
    <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.state.totalSal}</td>
    </tr>
  </table>
  {/* <Department did="dept101" dname="development"></Department> */}
  <SalaryEmp basic={this.props.basicsal} hra={this.props.hra} sa={this.props.sa} onSalChange={this.getUpdatedSal}/>
    </div>
  }
}
