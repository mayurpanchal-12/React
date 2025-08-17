import { useState } from "react";

function Todo() {
  let [todo, setTodo] = useState(""); // for input text
  let [todos, setTodos] = useState([]); // for list of todos
  let [date, setDate] = useState(""); // for date input

  const add = () => {
    if (todo.trim() === "") return; // avoid empty
    setTodos([...todos, { text: todo, date }]);
    setTodo("");
    setDate("");
  };

  const clear = () => {
    setTodos([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Add your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={add}>Add</button>
      <button onClick={clear}>Clear</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.text} {item.date && `(${item.date})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
