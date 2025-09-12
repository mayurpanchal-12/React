import { useMemo, useState } from "react";
//logic error
function Me(){
  let [count , setcount] = useState(0)

let sum = useMemo(()=>{
  console.log("heavy cal");
if(count%2===0){
  
  let total=0;
  for(let i=1; i<10000; i++){
      total += i * i
  }
  console.log(total);
  
  return total
}
},[count])

  return(
    <>
       <h1>{count}</h1>
       <button onClick={()=> setcount(count+1)}>add</button>
    </>
  )

};
export default Me