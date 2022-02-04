import React, { Component } from 'react';
import Profile  from './Profile';
import ProfileFun from "./ProfileFun"
export default class Login extends Component {
    constructor(props) {
      super(props)
        this.userRef=React.createRef()
        this.userRef1=React.createRef()
    }
    clickHandler=()=>{
        this.userRef1.current.focus()
    }

  render() {
    return <div><h2>Login Form</h2>
    <label>Username</label>
    {/* <input type="text" ref={this.userRef}/><br/> */}
    {/* <Profile innerRef={this.userRef} /> */}

    <ProfileFun ref={this.userRef1}/>
    <button onClick={this.clickHandler}>Focus Input</button>
    </div>;
  }
}
