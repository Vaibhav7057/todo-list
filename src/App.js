import "./App.css";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="app">
      <h1>Hello world!</h1>
      {!isAuthenticated ? (
        <div>
          <h4>Login</h4>
          <Login />
        </div>
      ) : (
        <div>
          <Logout />
          <Profile />
        </div>
      )}
    </div>
  );
}

export default App;
