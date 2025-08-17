import { useState } from "react";
function P(){
        let [counter , setconter ]= useState(0);
  function add(){
    if(counter>9){
      counter = 0;
    }else{
    counter = counter+1
setconter(counter)  };
    };
    function del(){
      if(counter<1){
        counter = 0
      }else{
        counter = counter - 1;
        setconter(counter)
      }
    };
    function reset(){
      setconter(0)
    }
 return(
  <>
  <div className="grid place-content-center h-screen bg-gray-100 ">
    <div className="border-indigo-400 border-4 border-inset bg-green-300 ">
    <h1 className="font-serif font-semibold text-amber-300 bg-red-600 mt-4 m- text-center">hello this counter</h1>
    <h2 className="underline decoration-2 decoration-yellow-300 m-2 text-center"> current value:- {counter}</h2>
    <button className="bg-amber-200 m-2 cursor-pointer border-solid border-4 border-green-00 rounded  " 
    onClick={add}
    >add</button>
    <button className="bg-amber-700 cursor-pointer m-2 border-solid border-4 rounded border-green-400" onClick={del}>delete</button>
    <button className="bg-amber-200 m-2 cursor-pointer border-solid border-4 border-green-400 rounded" onClick={reset}>reset</button>
    </div>
  </div>
  </>
 )


};
export default P;