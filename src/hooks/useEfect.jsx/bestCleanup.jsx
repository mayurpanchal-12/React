import { useState , useEffect } from "react";
function Cleanup() {
  let[count , set ]= useState(0);
  useEffect(()=>{
    console.log("count , increase");
    return()=>{
      console.log("new")
    }
  }, [count])
  return(
    <>
    <h1>{count}</h1>
      <button className="cursor-pointer" onClick={()=>{
        set(count = count+1)
      }}>increase</button>
    </>
  )

};
export default Cleanup;