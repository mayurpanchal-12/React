import { useState, useEffect } from "react";
function Base3(){
   let [count, set]=useState(0);
  useEffect(()=>{
    console.log("count change", count)
  }, [count])

  return(
    <>
      <h1>{count}</h1>
      <button onClick={()=>set(count= count+1)}>increase</button>
    </>
  )
};
export default Base3;
//whatever variable is in the dependency array, the effect will run whenever that variable changes.
//here count is in the dependency array, so the effect will run whenever count changes.
//this is useful for tracking changes in state or props and performing side effects accordingly.