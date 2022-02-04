import React, { Component } from 'react';

export default class CountChar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:''
      }
    }
    countchars(txt){
        this.setState({msg:"textbox has "+ txt.length+" number of characters"})
        console.log(this.state.msg)
    }
  render() {
    return <div>
        <label>Enter Characters</label>
        <input type="text" onChange={(event)=>this.countchars(event.target.value)}/>
        <div>{this.state.msg}</div>    
    </div>;
  }
}
