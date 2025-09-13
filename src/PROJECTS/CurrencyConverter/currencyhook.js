import { useState, useEffect  } from "react";

function useCurrencydata(currency){
  let [apidata , setapidata] = useState({}) 
  useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
     .then((response)=>response.json()) //api strnig data to json
           .then((data)=>setapidata(data.rates))
     
  },[currency])
  return apidata
};
export default useCurrencydata;