import React from "react";
import { useAuth } from "context/AuthContext/CreateAuthContext";
import UnauthenticatedApp from "component/UnauthenticatedApp";
import AuthenticatedApp from "component/AuthenticatedApp";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
