import { useState } from "react";
import { useTodo } from "./todocontext";
//this component represents a single todo item
export default function TodoItem({todo}){
const {updateTodo, deleteTodo, togleComplete} = useTodo();

  const [isTodoEditable , setIsTodoEditable] = useState(false);
  const [todoMsg , setTodoMsg] = useState(todo.todo);

  const editTodo =()=>{
    updateTodo(todo.id , {...todo,todo:todoMsg});
    setIsTodoEditable(false);
  }
  
  const toggleCompleted = ()=>{
    togleComplete(todo.id);
  };
  const handleEditClick = () => {
    if (todo.completed) return;
    isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
  };
  return(
    <div style={{ display: "flex", gap: "8px", padding: "8px", border: "1px solid #ccc" }}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text */}
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        style={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />

      {/* Edit / Save Button */}
      <button onClick={handleEditClick} disabled={todo.completed}>
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Button */}
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  )
}