import { useCallback, useEffect, useState } from "react"

function Practice(){
 let [count , setcount] = useState(0);
 let [text, setText] = useState("")
 let [bg, setbg] = useState("yellow")

let increment = useCallback(()=>{
  
   setcount(count=>count+1)
   console.log("increase")
  
},[])
 useEffect(()=>{
  console.log(
    `every time i do increment ;increement will be happens but that function is in 
           usecallback so that function  will be not recreated each time 
            `         
  )
 },[count])
let bgchange = ()=>{
  setbg((prev)=>(prev === "yellow" ? "pink" : "yellow"))
}

//in this setup without usecallback on every change renders will be print and function also recreated but increase not print every time because function recreated not called 
// if i click on add then function recreated and increase as well as renders also print to avoid these i will use use callback
 console.log("renderes")
  return(
    <div style={{backgroundColor:bg}}>
    <h1>{count}</h1>
    <button onClick={increment}>add</button>
    <input type="tex" className="bg-slate-600 m-1 text-white"
       value={text}
        onChange={(e) => setText(e.target.value)}
    ></input>
    <button onClick={
      bgchange
    }>change bg</button>
    </div>
  )
}
export default Practice