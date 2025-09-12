import React, { useState } from "react";
import userContext from "./usercontext";

// importing object from usercontext.js to create provider
// this is second step to create context api

const Usercontextprovider = ({children})=>{
    // giving children means whatever is inside usercontextprovider in apps.jsx
    //  will be passed as children props
  const [user , setUser] = useState(null)
  // those user and setuser will be available to all the components inside usercontextprovider
  // all children can access user and setuser which are inside usercontextprovider
   return(
        <userContext.Provider value={{user,setUser}}>
          {/* value are {user} and {setUser} which are accessed by children */}
          {/* at first we define user and setuser in usercontextprovider and then in return we actually provide it to children */}
          {/* here user is null initially and it will be tre
          ated as an object  */}
          {children}
        </userContext.Provider>

   )

}

export default Usercontextprovider;