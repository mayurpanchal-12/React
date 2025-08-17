import { useState } from "react";

function Toodo() {
  let [todo, settdo] = useState("");
  let [todoarray, settodoarray] = useState([]);
  let [date, setdate] = useState("");

  let add = () => {
    if (todo.trim() === "") return;
    settodoarray([...todoarray, { Text: todo, date: date }]);
    setdate("");
    settdo("");
  };

  const clear = () => {
    settodoarray([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add your todo"
        value={todo}
        onChange={(e) => settdo(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setdate(e.target.value)}
      />

      <button onClick={add}>Add</button>
      <button onClick={clear}>Clear</button>

      <ul>
        {todoarray.map((item, index) => (
          <li key={index}>
            {item.Text} {item.date && `(${item.date})`}
          </li>
        ))}
      </ul>

     
    </div>
  );
}

export default Toodo;
