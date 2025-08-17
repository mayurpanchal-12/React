 import { useState } from "react"
// import Counteer from "/"
import Counteer from "./countHook";
function H(){
  const {count , increment , decrement} = Counteer(0)
  return(
  <>
   <h1>{count}</h1>
    <button onClick={increment}>add</button>
    <button onClick={decrement}>delete</button>
  </>
)
 };
 export default H;