import { useEffect, useState } from "react";
import { useLoaderData  } from "react-router-dom";
function GitHub() {
const data = useLoaderData()
  //1st method
  // let [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((resp) => resp.json())
  //     .then((data) => setdata(data));
  // }, []);
  return (
    <div className="text-center bg-gray-600 text-white p-4 text-3xl">
      Github followers {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}
export default GitHub;

export const githubinfoloader = async ()=>{
  const resp = await fetch("https://api.github.com/users/hiteshchoudhary")
  return resp.json()
}
