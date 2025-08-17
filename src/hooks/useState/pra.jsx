import { useState } from "react";
function Pra(){
//  let value = 15;
let [counter , setCounter] =  useState(15)
let update = ()=>{
    setCounter(counter => counter + 1) // counter++; will not work as expected
};
 function del(){
   setCounter(counter = counter-1)
 }
  return(
    <>
    <h1> my counter</h1>
    <h2> value : {counter}</h2>
    <button
    onClick={update}> add </button>
    <button onClick={ del}> delete</button>
</>
  )
};
export default Pra;