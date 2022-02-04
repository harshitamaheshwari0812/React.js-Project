// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function HookuseEffect() {
//     const [post,setPosts]=useState([])
//     const[err,setErr]=useState('')
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((res)=>{console.log(res)
//         setPosts(res.data)})
//         .catch((error)=>{console.log(error)
//         setErr('something went wrong')})
//     })
//   return <div> <h3>Post List</h3>
//   <table className="table table-bordered">
//     <thead><tr><th>Id</th><th>Title</th><th>Body</th></tr></thead>
// <tbody> {post.length?post.map(obj=>
//               <tr key={obj.id}>
//                   <td>{obj.id}</td><td>{obj.title}</td><td>{obj.body}</td>
//               </tr>  ):<tr><td colspan="3">{err}</td></tr>}
// </tbody>
//   </table>
// </div>;
// }




import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function HookuseEffect() {
    const [post,setPosts]=useState([])
    const[err,setErr]=useState('')
    const[id,setid]=useState(1)
    useEffect(()=>{
        // console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{console.log(res)
        setPosts(res.data)})
        .catch((error)=>{console.log(error)
        setErr('something went wrong')})
    },[id])
  return <div> <h3>Post List</h3>
  <input type="text" placeholder='enter id' onChange={(e)=>setid(e.target.value)}/><br/>
  <table className="table table-bordered">
    <thead><tr><th>Id</th><th>Title</th><th>Body</th></tr></thead>
<tbody>         <tr key={post.id}>
                  <td>{post.id}</td><td>{post.title}</td><td>{post.body}</td>
              </tr>  
</tbody>
  </table>
</div>;
}