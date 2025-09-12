import useapi from "./ahook";
function Apihook(){
let {dataFromAPi} = useapi();
console.log(dataFromAPi)
return(
  <h1>helo</h1>
)
};
export default Apihook