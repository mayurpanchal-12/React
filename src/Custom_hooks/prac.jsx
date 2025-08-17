import useCurrencydata from "../currency/currencyhook";

function Index(){
 let {apidata} = useCurrencydata("INR")
   console.log(apidata)

};
export default Index;

//practice