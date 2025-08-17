import { useState, useEffect } from "react"

function Width(){
     let [wi , setwi] = useState(window.innerWidth)
     useEffect(()=>{
       console.log(wi)
      
     }, [wi])
  return (
    <div>
      <h1>
          {wi}
      </h1>
    </div>
  )
};
export default  Width 