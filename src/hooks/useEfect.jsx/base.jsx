import { useEffect } from "react"
function Base(){
  useEffect(()=>{console.log("hello")})
  return(
   <h1>hellosss</h1>
  )
};
export default Base;
//whatever wriiten is useefect will run once when the component mounts;

// Note: The code above is a simple React component that logs "hello" to the console when it mounts. It returns a heading element with the text "hellosss". The `useEffect` hook is used to perform side effects in function components.
// when the component mounts, the message "hello" will be logged to the conole/
// there is no dependency array, so the effect runs after every render, which is not typical for most use cases. to understand this check base1.jsx