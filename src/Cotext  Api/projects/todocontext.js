import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
   Todos:[{
    id:1,
    todo:"msg",
    completed:false
   }],
   addTodo:(todo)=>{},
   deleteTodo:(id)=>{},
   updateTodo:(id,todo)=>{},
   togleComplete:(id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo=()=>{
  return useContext(TodoContext)
}