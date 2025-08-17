import { useState } from "react";
function Change() {
  let [ color, setColor ] = useState("olive");
  return (
    <div className="h-screen flex justify-center items-end"
       style={{backgroundColor:color}}
    >
      <div className="bg-white flex justify-around items-center w-64 h-24 rounded shadow-md">
       <button className="bg-red-400 border-2 border-black cursor-pointer"
          onClick={()=>{setColor("red")}}
       >red</button>
       <button className="bg-orange-300 border-2 border-black cursor-pointer"
         onClick={()=>setColor("orange")}
       >yellow</button>
       <button className="bg-green-400 border-2 border-black cursor-pointer"
         onClick={()=>setColor("green")}
       >green</button>
      </div>
    </div>
  );
}
export default Change;
