import { useState, useContext } from "react";
import UserContext from "./usercontext";
// this is the fourth step to create context api; where we are creating components which are children inside usercontextprovider
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  // usecontext hook is used to consume the context values ; here we are consuming setUser function from usercontextprovider which is created using usercontext object
  // so to acsees provider values give object from which provider is created 

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
    // now any children component of provider had user and password values are updates all at a time
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
          {" "}
        <br/>

        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        /><br/>

        <button onClick={handleClick}>Login</button>
      </form>
    </>
  );
}
