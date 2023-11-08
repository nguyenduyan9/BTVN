import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";

export default function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="container">
      {isAuthenticated ? <Profile /> : <LoginButton />}
    </div>
  );
}
