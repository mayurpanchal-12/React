  import { useState, useEffect } from "react"

function One(){
  let[count , set]= useState(0)
  useEffect(()=>{
    console.log("hello")
    set(count=count+1)
  },[count])
  return(
<div>
     <h1>hello</h1>
        <h2> count is{count}</h2>
        <button >increase</button>
        <button >decrease</button>
</div>
  )
};
export default One;