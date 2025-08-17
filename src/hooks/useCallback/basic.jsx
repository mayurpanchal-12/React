import { useState } from "react";

function Basic() {
  let [count, setCount] = useState(0);

  // 🔁 This function is recreated on every render
  let handleClick = () => {
    console.log("Button clicked!");
  };

  console.log("Component rendered", handleClick);

  // 🔹 Explanation:
  // Without useCallback, handleClick is re-created on every re-render.
  // If you click "increase", the state `count` changes, so the component re-renders,
  // and a new `handleClick` function is created (new memory reference).
  // But if you click only "click", it does not change any state, so no re-render happens,
  // and handleClick is not recreated.

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default Basic;
