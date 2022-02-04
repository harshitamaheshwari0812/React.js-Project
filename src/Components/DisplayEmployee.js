// export function DisplayEmployee(){
//     return(
//         <h1>Employee functional component</h1>
//     )
// }

import React from 'react';

export default function DisplayEmployee(emp)
 {
  return <div>
      <h1>Employee Details</h1>     
  <table className='table table-bordered'>
    <tr><th>ID</th><th>Name</th><th>Salary</th></tr>
    <tr>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.salary}</td>
    </tr>
  </table>
  
    </div>;
}


