import React, { Component } from 'react';
import axios from 'axios';
export default class EditPost extends Component {
    constructor(props) {
        
        super(props)
            this.state = {list:{},errmsg:'' } }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`) 
        .then(res=>{   console.log(res)
                 this.setState({list:res.data}) })
             .catch(error=>{console.log(error) 
                this.setState({errmsg:'Something went wrong'}) })
}
  render() {
    return <div>
        <form>
        <label>Id</label><input type="text" className='form-control' name="id" value={this.state.list.id}/><br/>
        <label>Title</label><input type="text" className='form-control' name="title"  value={this.state.list.title}/><br/>
        <label>Body</label><input type="text" className='form-control' name="body"  value={this.state.list.body}/><br/>
        <button type="submit" className='btn btn-primary'>Submit Post</button>
        </form>
    </div>;
  }
}
