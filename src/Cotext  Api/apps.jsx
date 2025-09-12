import Login from "./login";
import Profile from "./profile";
import Usercontextprovider from "./usercontextprovider";
export default function App() {
  return (
    <Usercontextprovider>
      {/* here we are wrapping login and profile component inside usercontextprovider so that both components can access user and setuser values */}
      {/* now both login and profile are children of usercontextprovider */}
      {/* first login then profile will render this is third step to create context api */}
      
      <Login />
      <Profile />
    </Usercontextprovider>
  );
}
