import { useState } from "react";

function Todu(){
   let [task , settask] = useState("");
   let [ta, sta] = useState([]);
   
   let add = ()=>{
     if(task.trim()=== "") return
     sta([...ta, {Text:task}])
     settask("")
   }
const clear = ()=>{
  sta([])
}
   return(
<div>
     <h1>todo list</h1>
     <div>
      <input type="text"
      placeholder="add your todo"
      value={task}
      onChange={(e)=>{
  settask(e.target.value)
      }}></input>
     </div>
     <button onClick={add}>add</button>
     <button onClick={clear}>clear</button>
     <ul>
      {
        ta.map((item , index)=>(
            <li key={index}>
              {item.Text}

            </li>
        ))
      }
     </ul>
</div>      

   )


}
export default Todu;