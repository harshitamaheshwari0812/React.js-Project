import React from 'react';

export default function DisplayEmpList({emp}) {
  return <div>
      <h2>Employee Name={emp.Name} 
      and Employee Salary {emp.Salary} </h2>
  </div>;
}
