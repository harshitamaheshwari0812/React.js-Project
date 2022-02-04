import React, { Component } from 'react';

export default class Profile extends Component {
    focusToParent=()=>{
        this.props.innerRef.current.focus()
    }
  render() {
    return <div><hr/><h2>User Profile </h2>
    <p onClick={this.focusToParent}>Username:Ram</p>
    </div>;
  }
}
