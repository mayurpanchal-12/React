import { useId } from "react"

function Input({
  label , //used in input filed naming, label
  amount , // used for input amount
  onamountchange, // to store change amount
  currencyOptions =[], // used in options
  oncurrencychange, //used on select 
  selectCurrency = 'usd',//used in select
  amountDisable = false, //used in amt input
  currencydisable = false, //select field
  className =""

}){
  let id = useId() 
  return(
    <>
      <div className={`bg-amber-300 ${className} `}>
         <h1 className="bg-red-500">entire div </h1>

 {/*input field*/}
       <div className="bg-blue-500">
      <label htmlFor={id}>{label}</label>
      <input type="number" 
       value={amount || ""}
       id={id}
       min="0"
       placeholder="enter amount"
       step="any"
       disabled={amountDisable}
       onChange={(e)=>{
        onamountchange && onamountchange(Number(e.target.value))
        
       }} className="bg-amber-50"></input>
 </div>

 {/* currency section,selection */}

<div className="bg-emerald-500">
   <p>currency type</p>
     <select
       value={selectCurrency}
       onChange={(e)=>{
        oncurrencychange && oncurrencychange(e.target.value)
       }}
       disabled={currencydisable}
       >

        {currencyOptions.length ===0?(
          <option>Loading Currencies....</option>
        ):(
          currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))
        )
        }
     </select>
</div>

 </div>
    </>
  )
}
export default Input;



