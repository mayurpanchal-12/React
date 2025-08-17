function Base(){
  let count = 15;
  let add= ()=>{
    console.log("clicked", count);  
   count++;
  }

      return(
          <>
      <h1>welcome to counter </h1>
      <h2>counter: {count}</h2>
      <button 
       onClick={add}>add </button>
      <button>remove</button>
        </>
  )
}
export default Base;
//here value change but not added in UI
// this is problemof react 
//to solve this is there is hook; 
// for updation in ui we use hook ;
