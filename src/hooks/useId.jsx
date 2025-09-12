import { useId } from "react"

function Id(){
let id = useId();
let id2 = useId();
  return (
   <>
    <label htmlFor={id}>name</label>
    <input type="text" placeholder="enter name" id={id}></input>

    <label htmlFor={id2} >address</label>
    <input type="text" placeholder="address" id={id2}></input>
   </>

  )
};
export default Id;