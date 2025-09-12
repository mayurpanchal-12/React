import { useEffect, useState } from "react";

function useh(currency){
let [apidata ,setapi]= useState({});

 useEffect(()=>{
   fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
   .then((res)=>res.json())
   .then((data)=>setapi(data.rates))

 },[currency])

   return apidata

}
export default useh;