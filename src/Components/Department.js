import React from 'react';
import { UserConsumer } from './UserContext';
export default function Department(dept) {
  return <div>
      <h3>Dept ID= {dept.did}</h3>
      <h3>Dept Name={dept.dname}</h3>
      {/* <UserConsumer>
        {(v)=><h1 style={{color:'blue'}}>Hello {v}</h1>}
      </UserConsumer> */}
        </div>
}
