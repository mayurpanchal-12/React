import { useState } from "react";

function usehook(initialvalue){
let [count , set] = useState(initialvalue)
  let increase = ()=>{
     set(count+1)
  };
  let decrease =()=>{
   set(count-1)
  }

return [count , increase, decrease]
}
export default usehook