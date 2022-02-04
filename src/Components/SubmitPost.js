import axios from 'axios';
import React, { Component } from 'react';

export default class SubmitPost extends Component {
    constructor(props) {
      super(props)
          this.state = {
         title:'',body:''} }
    changeHandler=(e)=>{ this.setState({[e.target.name]:e.target.value})    }
    submitHandler=(e)=>{
        e.preventDefault()
        // console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((res)=>{console.log(res)})
        .catch((error)=>{console.log(error)})
    }
  render() {
      const {title,body}=this.state
    return <div> <form onSubmit={this.submitHandler}>
        <label>Title</label><input type="text" className='form-control' name="title"
         value={title} onChange={this.changeHandler}/><br/>
        <label>Body</label><input type="text" className='form-control' name="body"
         value={body} onChange={this.changeHandler}/><br/>
        <button type="submit" className='btn btn-primary'>Submit Post</button>
        </form>
    </div>;
  }
}
