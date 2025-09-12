// import { useParams } from "react-router-dom";
// function User(){
//   const {userid} = useParams()
//   return(
//     <div className="bg-slate-600 grid place-content-center text-white text-3xl p-3">user:{userid}</div>
//   )
// };
// export default User;

import { useParams } from "react-router-dom";


 export default function User(){
  const {userid} = useParams()
  return (

    <div>
       user:{userid}

    </div>
  )

}