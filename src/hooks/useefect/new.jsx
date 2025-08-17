import { useState, useCallback, useEffect } from "react";

function Pass() {
let [length , setlength] = useState(8); // Length of the password
let [num ,setnum ] = useState(false); // Include numbers; by default false
let [char , setchar ]= useState(false); // Include special characters; by default false
let [pass , setpass] = useState(""); // Generated password;currently empty

// Function to generate the password
//depends on length, num, char, and setpass
//setpass is not used in dependacy
// passwordgenerter can be used without usecallback
// but using usecallback will prevent unnecessary re-renders
// and will only be called when length, num, or char changes
//and useeffect that generates password will be called when length, num, or char changes this called passwordGenerator and also usecallback will be run and we can get new password
const passwordGenerator = useCallback(()=>{
 let currentPass = ""; //current password
 let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // choose from these characters
  if(num){
    string += "0123456789"; // if num is true, add numbers; pass can contain numbers
  }
  if(char){
            string += "!@#$%^&*()_+[]{}|;:,.<>?";
  } // if char is true, add special characters; pass can contain special characters
  //above tells how our password should be 

  // Loop to generate the password;that will be of length of 'length' and based on above conditions
    
     for(let i=1; i<=length ; i++){
      let char = Math.floor(Math.random()*string.length) // Randomly select a character from the string
      currentPass += string.charAt(char) // Append the character to the password; currentpass is now updated
     };


    setpass(currentPass); // Set the generated password
    //now pass is updated with the generated password
},[length , num , char ])


// useEffect to call passwordGenerator whenever length, num, or char changes
 useEffect(()=>{
  passwordGenerator(); // Call the password generator function
  // this will generate a new password based on the current settings
 } , [length , num , char ])
 return(
 <>
  <h1 className="bg-amber-500">pass gen</h1>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 ">
    <input type="text"
    value={pass} // Display the generated password
    className="outline-none w-full py-1 px-3 bg-white"
    placeholder="password"
    readOnly // Make it read-only so user can't edit it
    />
    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "> copy </button>
  </div>
 <div className="text-orange-400">
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 ">
     {/* range */}
    <input type ="range"
     min={3}
      max={100}
       defaultValue={length}
        className="cursor-pointer"
         onChange={(e)=>setlength(e.target.value)} // Setting the length of the password
    />
       <label className="text-orange-600">length:{length}</label>
</div>
   <div className="flex items-center gap-x-1 text-sm ">
    {/* checkbox for numbers */}   
       <input type="checkbox"
        defaultChecked={num}
        id="numberinput"
   onChange={()=>{
          setnum((prev)=>{
            return !prev; // Toggling the state of num
          })
   }} 
   />
       <label htmlFor="numberinput" className="text-orange-500"> numbers</label>
    </div>

    <div className="flex items-center gap-x-1 text-sm ">
      {/* this div is for special characters */}
           <input type="checkbox"
            defaultChecked={char}
            id="charinput"
         onChange={()=>{
            setchar((prev)=>{
              return !prev; // Toggling the state of char
            })
         }}/>
           <label htmlFor="charinput" className="text-orange-500"> special characters</label>
    </div>    

</div>
      </>


 )



};
export default Pass;

//usecalback  prapare funcions when dependencies change
/*This returns a memoized function that will only change when length, num, or char change.

It does not automatically run the function — it just prepares it.

Think of it like saving a recipe — it doesn’t actually cook the food.
to call this we use useEffect */

//useEffect is used to call the passwordGenerator function whenever length, num, or char changes. This ensures that a new password is generated based on the current settings.
/*This actually runs your passwordGenerator whenever length, num, or char change.

Think of it like calling the chef to make the food using the recipe.

Without this, your password would only change if you manually call passwordGenerator() somewhere else.
*/
/* 4️⃣ Could you remove one?
If you remove useCallback:
Your code will still work fine because you can just define passwordGenerator as a normal function inside your component and call it in useEffect.
useCallback here is mostly an optimization.

If you remove useEffect:
The password will only change if you call passwordGenerator() manually (like on a button click). It won’t update automatically on slider/checkbox change.

*/