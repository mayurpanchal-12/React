import { useState } from "react"
import useh from "./cure"
//remeber when i give something to the useh as a para then only api will return data
import Input from "./in"

function Im(){

 const [amt , setamt] = useState(0);       // amount entered
const [from , setfrom ] = useState("usd"); // currency to convert FROM
const [to , setto ] = useState("inr");     // currency to convert TO
let [convertedamt ,setconvertedamt] = useState(0); // final converted amount

  const currencytochange = useh(from)
  //useh is  a  function that get amt from selection and from variable so an that currency api work and gives data
  
  const options = Object.keys(currencytochange)
  //useh give all rates after convertion for from parameter in each currency so in options we get all the option in which we want to convert our from currency 

  const swap =()=>{
    //exchange function 
    let temp = from;
    setfrom(to);
    setto(temp);

    setamt(convertedamt);
    setconvertedamt(amt)
  }

const convert=()=>{
  setconvertedamt(amt*currencytochange[to])
}
// currencytochange is an object containing all exchange rates relative to the "from" currency
// Example: {usd: 1, inr: 83, eur: 0.92}
// 'to' is the target currency code, e.g., "inr"
// Multiply the entered amount (amt) by the target currency rate to get the converted amount


return(
 <div   className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/33398138/pexels-photo-33398138.jpeg')`,
      }}> {/*main page*/}

  {/* form     */}

  <form 
    onSubmit={(e)=>{
      e.preventDefault(); 
      convert() //calls main convert function
    }}
  >  

  {/* input for amt */}

 <div className="bg-yellow-200">
   <Input 
       label="from" //sets label to from 
     amount={amt} //sets amount 
     currencyOptions={options} //gives options
     oncurrencychange={
      (currency)=>setfrom(currency)} //what to do when currency change
      selectCurrency={from} //select currency
        onamountchange={(amount)=>setamt(amount)} //amt change
       ></Input>
   </div>

   
{/* swap */}
<div className="bg-blue-400">
  <button type="button"
     onClick={swap}>swap</button>
</div>

{/* convertion box */}
<div className="bg-green-400">
  <Input 
   label="to"
   amount={convertedamt} //sets converted amt
     currencyOptions={options} //gives options
     oncurrencychange={
      (currency)=>setto(currency)} //what to do when currency change
      selectCurrency={to} //select currency
        onamountchange={(amount)=>setamt(amount)} //amt change
        amountDisable
  />
</div>
{/* to button */}
<button type="submit"
 >
  convert {from.toUpperCase()} to {to.toUpperCase()}
 </button>

  </form>


  </div>
)
}
export default Im;


// import { useState } from "react"
// import useh from "./cure"
// //remeber when i give something to the useh as a para then only api will return data
// import Input from "./in"

// function Im(){

//  const [amt , setamt] = useState(0);       // amount entered
// const [from , setfrom ] = useState("usd"); // currency to convert FROM
// const [to , setto ] = useState("inr");     // currency to convert TO
// let [convertedamt ,setconvertedamt] = useState(0); // final converted amount

//   const currencytochange = useh(from)
//   //useh is  a  function that get amt from selection and from variable so an that currency api work and gives data
  
//   const options = Object.keys(currencytochange)
//   //useh give all rates after convertion for from parameter in each currency so in options we get all the option in which we want to convert our from currency 

//   const swap =()=>{ 
//     //exchange function 
//     let temp = from;
//     setfrom(to);
//     setto(temp);

//     setamt(convertedamt);
//     setconvertedamt(amt)
//   }

// const convert=()=>{
//   setconvertedamt(amt*currencytochange[to])
// }
// // currencytochange is an object containing all exchange rates relative to the "from" currency
// // Example: {usd: 1, inr: 83, eur: 0.92}
// // 'to' is the target currency code, e.g., "inr"
// // Multiply the entered amount (amt) by the target currency rate to get the converted amount


// return(
//   <div className="w-full h-screen flex flex-col justify-center items-center gap-6 p-4 bg-gray-100">
//     {/*main page*/}
//   <form 
//     onSubmit={(e)=>{
//       e.preventDefault(); 
//       convert() //calls main convert function
//     }}
//     className="flex flex-col gap-4 w-full max-w-md p-4 bg-white rounded-lg shadow-md"
//   >  
//  <div className="bg-yellow-200 p-2 rounded">
//    <Input 
//        label="from" //sets label to from 
//      amount={amt} //sets amount 
//      currencyOptions={options} //gives options
//      oncurrencychange={(currency)=>setfrom(currency)} //what to do when currency change
//       selectCurrency={from} //select currency
//         onamountchange={(amount)=>setamt(amount)} //amt change
//        ></Input>
//    </div>
// {/* swap */}
// <div className="bg-blue-400 p-2 rounded text-center">
//   <button 
//     type="button"
//     onClick={swap}
//     className="px-4 py-2 bg-blue-600 text-white rounded"
//   >
//     Swap
//   </button>
// </div>

// {/* convertion box */}
// <div className="bg-green-400 p-2 rounded">
//   <Input 
//    label="to"
//    amount={convertedamt} //sets converted amt
//      currencyOptions={options} //gives options
//      oncurrencychange={(currency)=>setto(currency)} //what to do when currency change
//       selectCurrency={to} //select currency
//         onamountchange={(amount)=>setamt(amount)} //amt change
//         amountDisable
//   />
// </div>
// {/* to button */}
// <button 
//   type="submit"
//   className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg"
// >
//   convert {from.toUpperCase()} to {to.toUpperCase()}
// </button>

//   </form>


//   </div>
// )
// }
// export default Im;
