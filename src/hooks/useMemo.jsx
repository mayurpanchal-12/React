import { useState, useMemo, useEffect } from "react"

function Memo(){
  let [count, setcount] = useState(0);
  let [number, setnumber] = useState(0);
    
  /*  let a = ()=>{
      console.log("Function executed, re-rendering");
      return "Memoized Value";
      // This function will be called every time the component re-renders
      //here execution of this every time is not needed
      // so we can use useMemo to memoize the value
    }
      */

    // Using useMemo to memoize the value
    //here we are not adding dependencies
  /* let a = useMemo(()=>{
       console.log("Function executed, re-rendering");
       return "Memoized Value";

    })
       */

    // Using useMemo with a dependency array
    //re-renders only when mount or when dependencies change
    //in this case, it will not re-render on every count change
    //it will only re-render when the component mounts
  /*
    let a = useMemo(()=>{
     console.log("Function executed, re-rendering");
     return "Memoized Value";
    },[])
 */
    // Using useMemo with a dependency array
    //when the number changes, it will re-render
    //numer will change only when count is even
    //so it will not re-render on every count change
    let a = useMemo(()=>{
      console.log("Function executed, re-rendering");
      return "Memoized Value";
    },[number]);

  useEffect(()=>{  if(count % 2 === 0){
      setnumber(count)
    }}, [count]);
    return(
    <>  
    <p>{count
}</p>
       <button onClick={()=>{setcount(count=>count+1)}}>increase</button>
       <h1 className="bg-amber-200">{a}</h1>
       <h1 className="bg-amber-500">{number}</h1>
    </>
  )
};
export default Memo;