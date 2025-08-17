 import { useState } from "react";

 function Counteer(){
 const [count , setcount] = useState(0);
let increment = ()=> setcount(count=>count+1);
let decrement = ()=>setcount(count=>count-1);

 return {count , increment, decrement}
 }
 export default Counteer