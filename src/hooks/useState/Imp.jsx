import { useState } from "react";
// This component demonstrates the use of useState hook in React
//it is about useState ;
//in 1st condition we are using setCounter to update the counter value by incrementing it by 1 five times so the condition is same ; and in this situation use state take it as batch 
// so in 1st condition if counter is 15 and i click on add button it will increment only by 1 not by 5; usestate take same code segment as one bactch and process it as one batch so increment by only 1
//in 2nd condition we are using setCounter to update the counter value by decrementing
//usestate can give privous state value by using prevCounter or prevState
// so by using prevCounter we can decrement the counter value by 1 five times so the condition is different and in this situation use state take it as different batch
// so in 2nd condition if counter is 15 and i click on delete button it will decrement by 5 not by 1; usestate take different code segment as different bacth
// so it will process it as different batch and decrement 
// 3by 5
// so in 1st condition it will increment by 1 and in 2nd condition
// it will decrement by 5
function Imp(){
  let [counter , setCounter] =   useState(15)

//  let count = 15;
   let update = ()=>{
    setCounter( counter + 1) 
    setCounter( counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1)  // this is 1st condition

   };
   let del = ()=>{
       setCounter(prevCounter=>prevCounter-1);
       setCounter(prevCounter=>prevCounter-1);
       setCounter(prevCounter=>prevCounter-1);
       setCounter(prevCounter=>prevCounter-1);
       setCounter(prevCounter=>prevCounter-1); // this is 2nd condition
       
   }

   return(
   <>
   <div className="grid place-content-center h-screen">
    <h2> my counter</h2>
    <h2>counter value: {counter}</h2>
    <button onClick={
      update
    } className="m-4 bg-gray-500 border-2 border-amber-200 rounded border-solid">add</button>
    <button onClick={
      del} className="m-4 bg-gray-500 border-2 border-amber-200 rounded border-solid">delete</button>
      </div>
    </>
   )



}
export default Imp;