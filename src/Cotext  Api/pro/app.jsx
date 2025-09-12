import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme";
import ThemeBtn from "./themebtn";
import Card from "./card";

export default function App(){
  const [themeMode , sethemeMode ] = useState("light");

  const darktheme = ()=>{
    sethemeMode("dark")
  }

  const lighttheme = ()=>{
    sethemeMode("light")
  };

  //actual change in theme 
  
  useEffect(()=>{
    let htmlvar = document.querySelector('html')
         htmlvar.classList.remove("light" , "dark");
         htmlvar.classList.add(themeMode)
  },[themeMode])

  return(
    <ThemeProvider value={{ themeMode,darktheme , lighttheme}}>
       <ThemeBtn />
       <Card />

       {/* wrapping all components inside ThemeProvider so that all components can access themeMode , darktheme and lighttheme values */}
       {/* in previous example we gave values in provider file itself but here we are giving values in app.jsx file itself and then wrapping all components inside provider so that all components can access these values ; just a different way of giving values to provider  */}
       {/* because of this method code writting is less and easy to understand; removes complexity
       of giving , using children props etc which we did in previous example */}
    </ThemeProvider>
  )
}