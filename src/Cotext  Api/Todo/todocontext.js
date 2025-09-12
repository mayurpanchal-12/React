import { createContext,useContext } from "react";

export const Todocontext = createContext({
  todos:[
    {
      id: 1,
      todo: "msg",
      completed: false
    }
  ],
   addTodo:(todo)=>{},
   updateTodo:(id , todo)=>{},
   deleteTodo:(id)=>{},
   togleComplete:(id)=>{}
});
//properties in context and working in app.jsx
//object context for provider
export const useTodo= ()=>{
  return useContext(Todocontext)
  //hook for context 
}

export const Todoprovider = Todocontext.Provider