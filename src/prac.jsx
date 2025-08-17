import { useCallback, useEffect, useState } from "react"

function Prac(){
  let [count , set]= useState(0);
  let [count2 , set2]= useState(0);

        //1st..if count is even, set2 will be called
        //that triger a re-render because count2 changed
         useEffect(()=>{
                if(count % 2 === 0){
                    set2(count) }
                    },[count]); 

          //2nd...if count2 changes, a will be called(changed)
          //but i will make calling of a in return so i will use 3rd
        let a = useCallback(()=>{
           console.log("hello")
           },[count2]);
 
            //3rd ..//if a changes, it will be called
         useEffect(()=>{a()},[a]) 

  return(
    <>
    <p>{count}</p>
    <button onClick={()=>{set(count+1)}}>click</button>
    </>
  )
};
export default Prac;