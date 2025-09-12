import { useLoaderData } from "react-router-dom";

export default function Github(){
const data = useLoaderData();
return(
  <>
  <div>
    github followers:{data.followers}
    </div>
    {/* the data will be holds api data and in this function we use that data */}
  </>
)
};

export const githubapi = async()=>{
  const resp = await fetch("https://api.github.com/users/hiteshchoudhary")
  return resp.json();
  // so basically this fn gives api data and we use this data using loader 
}