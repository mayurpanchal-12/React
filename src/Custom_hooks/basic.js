import { useState, useEffect } from "react";
// here api fetch when mount and whenever currency variable changes
// function name should be start with use
function useCorruncydata(currency){
  //in custon hook we can use hooks of react 
     let [dataFromAPi , setData] = useState({});
      useEffect(()=>{
          fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
         .then((response)=>{
             response.json()
               .then((data)=>{
                  setData(data.rates)
                })
         });
      }, [currency])
      

     return {dataFromAPi}    
//in custom hooks return statement should be in {} or []
};
export default useCorruncydata;