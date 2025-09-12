import { useContext } from "react";
import userContext from "./usercontext"
// this is fifth step to create context api; where we are creating components which are children inside usercontextprovider
// to use provider we import its object from usercontext.js
function Profile(){
  const {user} = useContext(userContext);
  

  if(!user)  return <h1>Please Login</h1>
  return <> <h1>Profile</h1><h2>Welcome {user.username}</h2> </>;

}
export default Profile;