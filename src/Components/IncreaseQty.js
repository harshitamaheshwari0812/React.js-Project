import React, { Component } from 'react';

export default class IncreaseQty extends Component {
        constructor(props) {
          super(props)
        //   this.state = {
        //         count:0
        //   }
        this.inputRef=React.createRef()
        this.inputRef1=React.createRef()
        this.inputRef2=React.createRef()
        }     
    increaseQty=()=>{
            // this.setState({count:this.state.count+1})
            // console.log(this.state.count)
            this.inputRef.current.value++
            console.log(this.inputRef.current.value)
    }
    componentDidMount(){
            this.inputRef1.current.focus()    
    }
    focusInput=()=>{
        this.inputRef2.current.focus()    
    }
  render() {
    //   alert("render function called")
    return <div>
        {/* <input type="text" value={this.state.count}/> */}
        <input type="text" ref={this.inputRef}/>
    <button onClick={this.increaseQty}>+</button>   
    <br/><br/>
    <label>Enter Username</label><input type="text" ref={this.inputRef1}/><br/>
    <label> Username</label><input type="text" ref={this.inputRef2}/>
    <button onClick={this.focusInput}>Click me to focus on textbox</button>
    </div>;

  }
}
