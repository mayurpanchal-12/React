 import { useState, useCallback,useEffect, useRef } from "react";
 //from youtube
function Pass(){
  let[length, setlength] = useState(8);
  let [num , setnum] = useState(false);
  let[char , setchar] = useState(false);
  let[pass , setpass] = useState("");

  const passgen = useCallback(()=>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num){
      string += "0123456789";
    };
    if(char){
      string += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for(let i=1; i<=length ; i++){
      let char = Math.floor(Math.random()*string.length+1)
      pass += string.charAt(char)
    };
    setpass(pass)
  } , [length, num, char, setpass])
  useEffect(()=>{passgen()},
[length,num,char , setpass]);

//useref hook
//copy password to clipboard
//usecallback for optimization
  const copyPasswordToClipboard = useCallback(()=>{
       passwordref.current?.select(); // Select the text in the input
       passwordref.current?.setSelectionRange(0, 101); // select 0 to 10 characters
       window.navigator.clipboard.writeText(pass)
  }, [pass])
let passwordref = useRef(null);
  return(
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 ">
        <h1 className=" text-center text-white">pass gen</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={pass}
        className="outline-none w-full py-1 px-3 bg-white"
        placeholder="password"
        readOnly
        ref={passwordref} // Attach the ref to the input
        />
  <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
     onClick={copyPasswordToClipboard}
  > copy </button>
        </div>

<div className="flex text-sm gap-x-2">
  <div className="flex items-center gap-x-1">
    <input
    type="range"
    min={3}
    max={100}
    value={length}
    className="cursor-pointer"
    onChange={(e)=>{setlength(e.target.value)}}
     />
     <label className="text-orange-600">length:{length}</label>
  </div>
  <div className="flex items-center gap-x-1">
         <input
    type="checkbox"
    defaultChecked={num}
    id="numberinput"
    onChange={()=>{setnum((prev)=>!prev)}}
     />
     <label htmlFor="numberinput" className="text-orange-500" > numbers</label>
  </div>

<div className="flex items-center gap-x-1">
         <input
    type="checkbox"
    defaultChecked={char}
    id="characterinput"
    onChange={()=>{setchar((prev)=>!prev)}}
     />
     <label htmlFor="characterinput" className="text-orange-500" > char</label>
  </div>
  </div>

      </div>
  )
};
export default Pass;