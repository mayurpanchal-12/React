import { useCallback, useEffect, useState } from "react"

  function B(){
  
  let [count , setcount] = useState(0)
   let add = ()=>{
     setcount(count+1)

   };
   useEffect(()=>{
    console.log("hello")
  },[count]);
let a =   useCallback(()=>{
    console.log("function created")
  },[]);
  console.log("fn", a);
  return(
   <>
    <h1>hello</h1>
    <h2>{count}</h2>
    <button onClick={add}>add</button>
   </>
  )
  }
  export default B;