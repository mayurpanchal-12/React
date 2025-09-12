import { createContext, useContext } from "react";
export const Themecontext = createContext({
  themeMode: "light",
  darktheme : ()=>{},
  lighttheme:()=>{}
});

export const ThemeProvider  = Themecontext.Provider;

export default function usetheme(){
  return useContext(Themecontext)
}
// 1st step : -- makin context named Themecontext by using createcontext method instead of react.createcontext();
// gives bydefault values ; these values could be varibales as well as methods as given above ; this is first step to create context api; here difference is just we are creating context by using create context oinstead of react.createcontext() method and gives default values
// 2nd step : just crteating provider using Themecontext.Provider ; giving values and all as in previous example is handled diffrent here
// 3rd step :-- creating custom hook usethem that will gives context object ; so now evevry time we need not to import usecontext and context object separately ; we can just import this custom hook and get context object
// giving state as we gives in previous example in provider files is done in here in context file itself ; so less code writting and easy to understand