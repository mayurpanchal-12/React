import usehook from "./customhook";

function Hook(){
 let [count, increase, decrease] = usehook(10)
 return (
  <>
  <h1>{count}</h1>
  <button onClick={increase}>add</button>
  <button onClick={decrease}>delete</button>
  </>
 )


};
export default  Hook

