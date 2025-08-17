
import { useState } from "react"


function A(){
  let [cuurenttodo , set] = useState("")
 let [arrays , settodoarray] = useState([])
let [date , setdate] = useState("")
 let add =()=>{
  if(cuurenttodo.trim() === "") return
  settodoarray ([...arrays,{Text:cuurenttodo, date: date}]);
   set("");
   setdate("")
 }

 let clear = ()=>{
   settodoarray([])
 }
  return(
  <>
    <h1>Todo List</h1>
       <div>
        <input type="text" placeholder="entery your todo" value={cuurenttodo} 
         onChange={(e)=>{set(e.target.value)}}></input>
         <input type="date" value={date} onChange={(e)=>setdate(e.target.value)}></input>
       </div>
       <div>
        <button onClick={add}>add</button>
        <button onClick={clear}>clear</button>
       </div>
      <ul>
         {
        arrays.map((item , index)=>(
             <li key={index}>
               {item.Text} {item.date && `(${item.date})`}
             </li>
        ))

         }

      </ul>
  </>

  )
}
export default A;