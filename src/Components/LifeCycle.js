import React, { Component } from 'react';

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:"Ram",addr:"Pune"
      }
    }
    // static getDerivedStateFromProps(props,state){
    //     if(props.addr !== state.addr){
    //         return {addr:props.addr}
    //     }
    //    return null;    
    // }
    // componentWillMount(){
    //     console.log("com. will mount called")
    // }
    componentDidMount(){
        console.log("com did mount called")
    }
    changeState(){
        this.setState({name:"Peter"})
    }
  render() {
    return <div><h1>{this.state.addr}</h1> <h2>{this.state.name}</h2>
            < button onClick={this.changeState.bind(this)} className="btn btn-primary">Click Me!!</button>
    
    </div>;
  }

  shouldComponentUpdate(nextProps,nextState){
      console.log("shouldComponentUpdate")
      return true
  }
  componentWillUpdate(){
     console.log("componentWillUpdate called") 
  }
  componentDidUpdate(){
    console.log("componentdidUpdate called") 

  }
  componentWillUnmount(){
      console.log("componentWillUnmount called")
  }
}
