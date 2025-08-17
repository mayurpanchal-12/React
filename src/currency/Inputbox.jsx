  import { useId } from "react";
  function InputBox({
    label,
    amount ,
    onamountchange,
    oncurrencychange,
    currencyOptions=[],
    selectCurrency = "usd",
    amountDisable=false,
    currencydisable=false,
    className = "",
       }) {
   
const amountinputid = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountinputid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountinputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    min="0"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount || ""}
                    step="any"
                    onChange={(e)=>{
                      onamountchange && onamountchange(Number(e.target.value))
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                                   value={selectCurrency} //current value of select field
                                   onChange={(e)=>{
                                      oncurrencychange && oncurrencychange(e.target.value)
                                    } }
                                    disabled={currencydisable} 
                                    >
                      
  
    {currencyOptions.length === 0 ? (
  <option>Loading currencies...</option>
) : (
  currencyOptions.map((currency) => (
    <option key={currency} value={currency}>
      {currency.toUpperCase()}
    </option>
  ))
)}


 
              </select>
            </div>
        </div>
    );
}

export default InputBox;

//entrie inputbox from notes
//change in input field
//change in select and options
//labeling useid ;using to attaching lable and id



//  import { useId } from "react";

// function InputBox({
//   label,
//   amount,
//   onamountchange,
//   oncurrencychange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencydisable = false,
//   className = "",
// }) {
//   const amountinputid = useId();

//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       {/* Left side: Amount input */}
//       <div className="w-1/2">
//         <label
//           htmlFor={amountinputid}
//           className="text-black/40 mb-2 inline-block"
//         >
//           {label}
//         </label>
//         <input
//           id={amountinputid}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           min="0"
//           placeholder="Amount"
//           disabled={amountDisable}
//           value={amount || ""}
//           onChange={(e) =>
//             onamountchange && onamountchange(Number(e.target.value))
//           }
//         />
//       </div>

//       {/* Right side: Currency select */}
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(e) =>
//             oncurrencychange && oncurrencychange(e.target.value)
//           }
//           disabled={currencydisable}
//         >
//           {currencyOptions.length === 0 ? (
//             <option>Loading...</option>
//           ) : (
//             currencyOptions.map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency.toUpperCase()}
//               </option>
//             ))
//           )}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;
// */