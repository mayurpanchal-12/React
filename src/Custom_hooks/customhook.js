import { useEffect,useState } from "react"

function Usecurrencyinfo(currency){
  const [data , setdata] = useState({})
  useEffect(()=>{
   fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
          .then((response)=>{
            response.json()
               .then((data)=>{
                    setdata(data.rates)
               })
          })
  },[currency]);
  return {data}
};
export default Usecurrencyinfo;