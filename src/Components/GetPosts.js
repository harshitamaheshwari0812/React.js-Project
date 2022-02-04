import axios from 'axios';
import React, { Component } from 'react';

export default class GetPosts extends Component {
  constructor(props) {
    super(props)
      this.state = {
       list:[],errormsg:''  } }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((res)=>{console.log(res)
                this.setState({list:res.data})}) 
             .catch((error)=>{console.log(error)
                this.setState({errormsg:'something went wrong'})})
             // if i get the data that will be -> array of JSON objects
    }
    render() {
    return <div> <h3>Post List</h3>
        <table className="table table-bordered">
          <thead><tr><th>Id</th><th>Title</th><th>Body</th><th>Actions</th></tr></thead>
      <tbody> {this.state.list.length?this.state.list.map(obj=>
                    <tr key={obj.id}>
                        <td>{obj.id}</td><td>{obj.title}</td><td>{obj.body}</td>
                        <td><a href={'/GetPosts/'+obj.id} className="btn btn-primary">Edit</a></td>
                    </tr>  ):<tr><td colspan="3">{this.state.errormsg}</td></tr>}
      </tbody>
        </table>
    </div>;
  }
}
