// import { useEffect, useState } from "react"

// function useprac(currency){
//     let [apidata , setapidata] = useState({})
//     useEffect(()=>{
//       fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
//         .then((response)=>{
//            response.json())
//              .then((data)=>{
//                    setapidata(data.rates)
//              })
//         })

//     }, [currency])

//   return {apidata}
// }
// export default useprac;
import { useState, useEffect } from "react";

function useprac(currency) {
  const [apidata, setapidata] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest?base=${currency}`)
      .then((response) => response.json())
      .then((data) => {
        setapidata(data.rates);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return { apidata };
}

export default useprac;
