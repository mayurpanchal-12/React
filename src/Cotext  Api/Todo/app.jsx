import { useState } from "react"
import { Todoprovider } from "./todocontext";
import { useEffect } from "react";
import Todoform from "./todoform";
import TodoItem from "./ti";
// import TodoItem from "./todoitem";
//this as main app component
//we created all functions in context file and there working and all are defined in this file
// array of todos , addTodo , updateTodo , deleteTodo , togleComplete these are the properties of context
// used useefect twice 
   //1st will get todos from local storage when component mounts
   //2nd will save todos to local storage whenever todos change
export default function App(){
  const [todos , setTodos] = useState([]);
//here todos is array of objects ; which is from context

  const addTodo =(todo)=>{
    
    setTodos((prev)=>[...prev, {id:Date.now(),...todo}]) 

    // 'prev' is the previous todos array
// '...prev' copies all previous todos
// '{ id: Date.now(), ...todo }' creates a new todo object
// '...todo' copies all properties from the 'todo' argument into the new object (from addtodo fn call in todoform.jsx)
// So: previous todos + new todo = updated todos array

  };

  const updateTodo = (id , todo)=>{
    setTodos((prev)=> prev.map((prevtodo)=>(prevtodo.id === id ? {...prevtodo , ...todo} : prevtodo)))
    //updateTodo takes id and todo object as arguments
    //so if id which is in argument matches to the id of any todo in the todos array from previous array 
    //then show prev todo with merge of todo obj which is in argument 
    //else show prevtodo as it is
  }

const deleteTodo =(id)=>{
  setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id !== id))
// deleteTodo takes 'id' of the todo to remove
// 'prev' is the previous todos array
// .filter() goes through every 'prevtodo'
// keeps only those whose 'id' is NOT equal to the given id
// result = a new array without the matching todo

}



const togleComplete = (id) => {
  setTodos(prev =>
    prev.map(prevtodo =>
      prevtodo.id === id
        ? { ...prevtodo, completed: !prevtodo.completed }
        : prevtodo
    )
  );
  // togleComplete takes 'id' of the todo to toggle
  //using map to go through each todo
  // if id of any todo matches the given id
  // then create a new todo object with 'completed' status toggled
  // else keep the todo unchanged
  // result = a new array with the updated todo
};

  useEffect(()=>{
const todos = JSON.parse(localStorage.getItem("todos"))
if (todos && todos.length >0) {
  setTodos(todos)
}
  },[])
  //useefect with empty dependency array runs once on component mount
  //retrieving todos from local storage when the component mounts
//if todos exist and length is greater than 0 then setTodos with retrieved todos
  

  useEffect(()=>{
localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  //useefect with todos in dependency array runs whenever todos change
  //saving the current todos to local storage whenever they change
  

  return(
    <Todoprovider value={{todos,updateTodo,deleteTodo , addTodo , togleComplete}}>
      {/* providing context values to all child components */}
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                          
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}