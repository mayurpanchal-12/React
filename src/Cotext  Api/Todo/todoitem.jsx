import { useTodo } from "./todocontext";
import { useState } from "react";
//this component represents a single todo item
//1st it has todomsg state that holds the text of the todo item
//then it has edittodo function to update the todo text with new text from todomsg state
//then it has togglecompleted function to toggle the completed status of the todo
export default function TodoItem({todo}){
  const {updateTodo,deleteTodo , togleComplete} = useTodo();
  //getting functions from context
  const [isTodoEditable , setIsTodoEditable] = useState(false);

  const [todoMsg , setTodoMsg] = useState(todo.todo);
  //state for individual todo text;Take the todo property from the todo object and store it in the todoMsg state variable.

  const editTodo =()=>{
    updateTodo(todo.id , {...todo,todo:todoMsg});
    setIsTodoEditable(false);
    //here in updatetodo function we are passing id of todo to be updated and new todo object with updated text; todo is set using todoMsg state
    //spread operator in object will shows, take previous properties of object and then update todo property of that object with new text from todoMsg state
  }

  const toggleCompleted = ()=>{
    togleComplete(todo.id);
    //calling togleComplete function from context with id of todo to be toggled
    //this will toggle the completed status of the todo
  }
  return(
    <>
     <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                //checkbox checked status is based on completed property of todo object
                //onchange it will call togglecompleted function
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    </>
  )
}