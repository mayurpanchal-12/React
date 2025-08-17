import { useState } from "react";
function useTogle(){
  const [bg , setbg] = useState("white")
  let on = ()=>{
        setbg("yellow")
  }
  let off = ()=> setbg("black")
  return {bg,on,off}
}
export default useTogle;