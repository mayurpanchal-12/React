import { useState, useCallback } from "react";

function CallbackExample() {
  const [count, setCount] = useState(0);


  
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // this function is created only once
  // without callback, it would be recreated on every render

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default CallbackExample;
