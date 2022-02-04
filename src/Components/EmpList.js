import React from 'react';
import DisplayEmpList from './DisplayEmpList';

export default function EmpList() {
    // const names=["smith","john","neha","reha","seema","happy"]
    //    const data=names.map((n)=><h2>Name= {n}</h2>) 
    const employees=[{Id:"101",Name:"Smith",Salary:20000},
                    {Id:"102",Name:"Seema",Salary:30000},
                    {Id:"103",Name:"Jaya",Salary:25000},
                    {Id:"104",Name:"Sushma",Salary:10000},
                    {Id:"105",Name:"Rekha",Salary:50000},
                    ];
    // const emplist=employees.map((emp)=><p>Employee Id is {emp.Id} and Employee Name is {emp.Name} and salray is {emp.Salary}</p>)
  
    const emplist=employees.map((emp)=><DisplayEmpList key={emp.Id} emp={emp} />)
 // emp={Id:"101",Name:"Smith",Salary:20000}
  return <div>
      {/* {data} */}
       {emplist}             
  </div>;
}
