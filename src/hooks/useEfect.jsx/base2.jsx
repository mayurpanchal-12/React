import { useEffect } from "react";
function Base2() {
  useEffect(()=>{
    console.log("hello from Base2");
  }, []);
  return(
    <h1>base </h1>
  )
};
export default Base2;
// This component logs "hello from Base2" to the console when it mounts.
//here dependency array is empty , so the effect runs only once when the component mounts.