import React, { Component } from 'react';
import { UserConsumer } from './UserContext';
import UserContext from './UserContext';
export default class SalaryEmp extends Component {
  static contextType=UserContext
    constructor(props) {
      super(props)
    
      this.state = {
         b:this.props.basic,
         hra:this.props.hra,
         sa:this.props.sa
      }
    }
    updateSal=()=>{
            let totalsal=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value)
            // alert(totalsal)
            this.props.onSalChange(totalsal)
    }
  render() {
    return <div>
        {/* <table className='table table-bordered'>
    <tr><th>Basic</th><th>HRA</th><th>SA</th></tr>
    <tr>
        <td>{this.props.basic}</td>
        <td>{this.props.hra}</td>
        <td>{this.props.sa}</td>
    </tr>
  </table> */}
 {/* <UserConsumer>
        {(v)=><h1 style={{color:'red'}}>Hello {v}</h1>}
      </UserConsumer> */}
  <h1>Id={this.context.Id} and Name ={this.context.Name}</h1>

    <h1>Salary Details</h1>
        <div className="form-group col-4">
            <label>Basic Salary</label>
            <input type="text" className="form-control" defaultValue={this.state.b} ref="basic"/>
        </div>
        <div className="form-group col-4">
            <label>HRA</label>
            <input type="text" className="form-control" defaultValue={this.state.hra} ref="hra"/>
        </div>
        <div className="form-group col-4">
            <label>SA</label>
            <input type="text" className="form-control" defaultValue={this.state.sa} ref="sa"/>
        </div>
        <button className="btn btn-primary mt-2" onClick={this.updateSal}>Update Salary</button>
    </div>;
  }
}
// SalaryEmp.contextType=UserContext







