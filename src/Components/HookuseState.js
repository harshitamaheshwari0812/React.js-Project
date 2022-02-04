// import React, { Component } from 'react';

// export default class HookuseState extends Component {
//     constructor(props) {
//       super(props)
//           this.state = { count:0  }}
//     incCount=()=>{this.setState({count:this.state.count+1})}
//   render() {
//     return <div><button className='btn btn-primary' onClick={this.incCount}>
//         Click {this.state.count}</button></div>;
//   }}

// import React,{useState} from 'react';
// export default function HookuseState() {
//     const[count,setCount]=useState(0)
//   return <div>
//       <button className='btn btn-primary' onClick={()=>setCount(count+1)}>  
//       Click {count} </button>
//   </div>;
// }



// import React, { useState } from 'react';

// export default function HookuseState() {
//     const initialCount=0
//     const[count,setCount]=useState(initialCount)
//    const incrementFive=()=>{
//         for(let i=0;i<5;i++){
//             setCount(prevCount=>prevCount+1)}
//     }
//   return <div>
//       <h1>Count:{count}</h1>
//       <button class="btn btn-primary m-2" onClick={()=>setCount(initialCount)}>Reset</button>
//       <button class="btn btn-primary m-2" onClick={()=>setCount(count+1)}>Increment</button>
//       <button class="btn btn-primary m-2" onClick={()=>setCount(count-1)}>Decrement</button>
//       <button class="btn btn-primary m-2" onClick={incrementFive}>Increment by 5</button>
//   </div>;
// }



// import React, { useState } from 'react';

// export default function HookuseState() {
//     const[name,setName]=useState({firstName:'',lastName:''})
//   return <div>
//       <input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/><br/>
//       <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/><br/>

//       <h2>FirstName:{name.firstName}</h2>
//       <h2>LastName:{name.lastName}</h2>
//   </div>;
// }





import React, { useState } from 'react';

export default function HookuseState() {
    const[item,setItem]=useState([])
    const [arrArray,setAddArray]=useState([])
    const changeValue=(e)=>{setItem(e.target.value)}
    const submit=(e)=>{
        console.log(item)
        e.preventDefault() 
        setAddArray((prev)=>[...prev,item]) }
  return <div>
        <div className='col-4'>
      <form onSubmit={submit}>
             <input type="text" className="form-control" onChange={changeValue}/>
             <button type="submit" className='btn btn-primary mt-2'>Add item</button>
      </form></div><hr/>
      <h2>Items</h2>
      <ol>
        {arrArray.map(data=><li>{data}</li>)}
      </ol>
  </div>;
}






