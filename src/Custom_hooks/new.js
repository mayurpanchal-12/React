import { useEffect, useState } from "react";

 function usenew(currency){
   let [cur , setcur] = useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
                .then((response)=>response.json())
                 .then((data) => setcur(data[currency.toLowerCase()]))
    }, [currency])
  return {cur}
 };
 export default usenew; 
 


