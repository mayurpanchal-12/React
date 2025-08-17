  import { useState } from "react";
 
function Modes(){
     let[bgcolor , setBgcolor]= useState("white");
  
       let light = ()=>{
      setBgcolor("white")         
       };
       let dark = ()=>{
        setBgcolor("#333")
       }
  return(
    <>
    <div 
    style={{
        backgroundColor: bgcolor,
        height: "100vh",
        color: bgcolor === "white" ? "black" : "white",
        padding: "20px"
      }}>
    <h1> background changer</h1>
    <button onClick={
      light
    }> click for light mode</button>
    <button onClick={dark}>click for dark mode</button>
    </div>
    </>
  )
 }
 export default Modes;