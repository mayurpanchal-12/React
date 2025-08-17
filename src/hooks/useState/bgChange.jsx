 import { useState } from "react";

function Bgchange(){
  let [bgcolor , setbgcolor] = useState("black");
  
  // let green=()=> setbgcolor("green"); we can also use this method

  function all (a){
     if(a=="red"){
         setbgcolor("red");   
     }else if(a=="green"){
          setbgcolor("green")
     }else if(a=="black"){
           setbgcolor("black")
     }else{
      setbgcolor("yellow")
     }
  }
  return(
    
    <div className=" h-full min-h-screen flex flex-col justify-end items-center"
                      style={{
                        backgroundColor:bgcolor
                      }}
    >
    <div className="bg-yellow-50 h-12 border-gray-300 border-solid border-2 rounded w-3/4 m-4 flex justify-around items-center">
       <button className="bg-red-700 border-2 rounded  text-white w-18 border-black" onClick={()=>all("red")}>red</button>
       <button className="bg-green-400 border-2 rounded text-white w-18 border-black"onClick={()=>all("green")}>green</button>
       <button className="bg-black border-2 rounded text-white w-18 border-slate-700" onClick={()=>all("black")}>black</button>
       <button className=" bg-yellow-300 border-2 rounded text-white w-18 border-black" onClick={()=>all("yellow")}>yellow</button> 
    </div>
    </div>
  )
};
export default Bgchange;