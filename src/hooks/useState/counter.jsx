import { useState } from "react";
function Counter(){
  let [counter , setCounter] =   useState(15)

//  let count = 15;
   let update = ()=>{
    console.log(counter)
    counter++;
    setCounter(counter)

   };
   let del = ()=>{
       setCounter(counter--)
       console.log(counter);
       
   }

   return(
   <>
    <h2> my counter</h2>
    <h2>counter value: {counter}</h2>
    <button onClick={
      update
    }>add</button>
    <button onClick={
      del}>delete</button>
    </>
   )



}
export default Counter;