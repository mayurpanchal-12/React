
import { useLoaderData } from "react-router-dom";



export default function Git(){

  const data = useLoaderData();
  return(

    <>
     github follow:{data.followers}
      
    </>
  )
}

export const  githubapi = async()=>{
  const resp = await fetch("https://api.github.com/users/hiteshchoudhary")
  return resp.json();

}