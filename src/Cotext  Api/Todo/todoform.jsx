import { useState } from "react"
import { useTodo } from "./todocontext";

//this form has add function to add single todo to todos array in app.jsx
//form has input field and button to add todo
// onSubmit of form calls add function
export default function Todoform(){
  const [Todo , settodo] = useState("");
  //state for input field;individual todo text
  const {addTodo} = useTodo();
//get addTodo function from context
  const add = (e)=>{
    //add fn add single todo to todos array in app.jsx
    e.preventDefault()

    if(!Todo) return;

    addTodo({ todo:Todo, completed:false});
    settodo("");
    //if input field is present then execute addtodo function which is from context
    //that will add object with todo text and completed status false to todos array in app.jsx

  }
  
  return(
    <>
       <form  className="flex" onSubmit={add}>
        {/* this form allows users to add new todos 
            ; onSubmit calls add function to handle adding the todo
        */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={Todo}
                onChange={(e) => settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </>
  )
}
