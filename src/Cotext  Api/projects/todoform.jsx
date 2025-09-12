import { useTodo } from "./todocontext";
import { useState } from "react"

export default function Todoform(){

  const [Todo , settodo] = useState("");
  const {addTodo} = useTodo();

  const add =(e)=>{
    e.preventDefault()

    if(!Todo) return;

    addTodo({todo:Todo, completed:false});
    settodo("");
  };
  

  return(
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
  )
}