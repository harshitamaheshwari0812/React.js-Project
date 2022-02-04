import React from 'react';

// export default function ProfileFun() {
//   return <div>
//       <input type="text"/>
//   </div>;
// }


const ProfileFun=React.forwardRef((props,ref)=>{
    return <div>
           <input type="text" ref={ref}/>
       </div>;
})
export default ProfileFun