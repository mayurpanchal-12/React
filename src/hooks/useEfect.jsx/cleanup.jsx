import { useEffect } from "react";
function Cleanup(){
useEffect(()=>{
  const intervalid =  setInterval(()=>{
    let a= 0
    console.log(a=a+1)
  }, 1000);
  return()=>{
    clearInterval(intervalid);
    console.log("hello new beginnig")
  }
})

  return(
    <>
    <h1>hello</h1>
    </>
  )
};
//this is cleanup function
//cleanup function is used to clean up side effects when the component unmounts or before the next effect runs.
//it is useful for clearing intervals, timeouts, or unsubscribing from events
//in this case, it will log "hello new beginning" when the component unmounts
export default Cleanup;
//whatever written in the return statement of useEffect will run when the component unmounts or before the next effect runs.