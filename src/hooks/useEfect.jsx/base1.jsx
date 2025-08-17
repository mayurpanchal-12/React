import { useState , useEffect } from "react";
function Base1(){
  let [count , set ]= useState(0);
  useEffect(()=>{
    console.log("useefect runs");

    return()=>{
      console.log("cleanup function runs");
    };
  }
)

  return(
    <>
    <h1>study of useefect without dependency array </h1>
    <p>useEffect without dependency array runs after every render, including the initial render.</p>
    <h1>{count}</h1>
    <button onClick={()=>{
      set(count+1)
    }} >click</button>
    </>
  )
};
export default Base1;