import useTogle from "./toggle";

function Onn(){
  const {bg,on,off}=useTogle();
  return(
    <div style={{backgroundColor:bg}}>
    <h1 className="text-red-500">on and off</h1>
    <button onClick={on}>on</button>
    <button onClick={off}>off</button>
    </div>
  )

};
export default Onn;