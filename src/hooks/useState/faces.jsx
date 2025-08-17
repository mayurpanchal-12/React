import { useState } from "react";
import thinking from "./thinking.webp";
import happy from "./happy.webp"; 
import tired from "./tired.webp";
import angry from "./angry.webp";
function Face(){
          let[mood , setmood] =   useState(thinking);
  let a= ()=>{
    setmood(happy);
  };
  let b =()=>{
    setmood(tired);
  };
  let c = ()=>{
    setmood(angry);
  };
  return(
    <>
   <h1> how are you?</h1>
   <div>
    <img src={mood} alt={"thinking "} style={{backgroundColor:"white"}}></img>
   </div>
   <button onClick={a}>happy</button>
   <button onClick={b}>tired</button>
    <button onClick={c}>angry</button>
</>
  )
};
export default Face;