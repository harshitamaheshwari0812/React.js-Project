import React, { Component } from 'react';

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
      this.state = { isLoggedIn:true}
    }   
  render() {
    // return <>
    //             <div>Welcome</div>
    //             <div>User has to login first</div>
    //         </>;

        // if(this.state.isLoggedIn){
        //     return  <div><h1>Welcome Infoway</h1><p>Pune</p></div>
        // }
        // else{
        //     return  <div>User has to login first</div>
        // }

    //    let msg
    //     if(this.state.isLoggedIn){
    //         msg=<div><h1>Welcome Infoway</h1><p>Pune</p></div>
    //     }
    //     else{
    //         msg= <div>User has to login first</div>
    //     }
    //     return <>{msg}</>


    // return (
    //     this.state.isLoggedIn ? <><h1>Welcome Infoway</h1><p>Pune</p></>:<>User has to login first</>
    // )

    return (
            this.state.isLoggedIn && <><h1>Welcome Infoway</h1><p>Pune</p></>
        )

  }
}
