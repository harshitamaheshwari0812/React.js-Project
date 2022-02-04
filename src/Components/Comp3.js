import React, { useContext } from 'react';
import {UserContext,AdminContext} from '../App';

export default function Comp3() {
    const user=useContext(UserContext)
    const admin=useContext(AdminContext)
  return <div><h3>
     Hello {user}
     <br/>
     Hello {admin}
  </h3>
  
  {/* <UserContext.Consumer>
  {(value)=><h1 style={{color:'red'}}>Hello {value}</h1>}
  </UserContext.Consumer> */}

  {/* <UserContext.Consumer>
      {user=>{
          return (
              <AdminContext.Consumer>
                  {admin=>{
                      return (
                          <h1>
                              User context value {user} and Admin context value {admin}
                          </h1>
                      )
                  }
                  }
              </AdminContext.Consumer>
          )
      }} 
  </UserContext.Consumer>*/}



  </div>;
}
