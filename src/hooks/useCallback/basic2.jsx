import { useState, useEffect, useCallback } from "react";

// 🔹 This example shows how changing state (`handle`) causes re-renders.
// 🔹 Also demonstrates logging updated state using useEffect.

function Basic2() {
  const [count, setCount] = useState(0);
  const [handle, setHandleClick] = useState(0);

  

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setHandleClick(handle + 1); // Triggers a re-render
  });
//without dependency array, handleClick is recreated on every render;same work as without useCallback
  console.log("Component rendered", handleClick);

  useEffect(() => {
    console.log("Updated handle value (from useEffect):", handle);
  }, [handle]);

  return (
    <>
      <h1>count: {count}</h1>
      <h2>handle: {handle}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default Basic2;
