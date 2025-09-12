import { useEffect, useState } from "react";

function useapi(){
  let[dataFromAPi , setapidata] = useState([])
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((responese)=>responese.json())
    .then((data)=>{setapidata(data)})
      
  },[]) 
  
return{dataFromAPi}
};
export default useapi