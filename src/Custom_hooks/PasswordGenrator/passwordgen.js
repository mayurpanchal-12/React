import { useState , useCallback , useEffect , useRef, useId } from "react";
function usePasswordlogic(){

let [passlength , setpasslength] = useState(8);
  let [char , setchar] = useState(false);
  let [num , setnum] = useState(false);
  let [cuurentpass , setcurrentpass] = useState("");

  let passgen = useCallback(()=>{
    let generatedpass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num){
      string += "0123456789"
    };
    if(char){
      string +="#$%^!@*()"
    };

    for(let i = 0; i<passlength; i++){
      let randomcharacter = Math.floor(Math.random()*string.length)
      generatedpass += string.charAt(randomcharacter);
    }
setcurrentpass(generatedpass);
  },[passlength, num , char]);

  useEffect(()=>{
    passgen()
  }, [char , num , passlength  ])

  let passref = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
     passref.current?.select();
     passref.current?.setSelectionRange(0,101);
     window.navigator.clipboard.writeText(cuurentpass) 

  }, [cuurentpass])

let numerId = useId()
let characterId = useId()

return {
    passlength,
    setpasslength,
    char,
    setchar,
    num,
    setnum,
    cuurentpass,
    passref,
    copyPasswordToClipboard,
    numerId,
    characterId

}  
};
export default usePasswordlogic
