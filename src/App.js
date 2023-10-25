import "./App.css";

import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="app">
      <Navbar />
      {isAuthenticated && <Profile />}
    </div>
  );
}

export default App;
