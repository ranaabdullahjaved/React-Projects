import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Home() {
  const { user } = useContext(UserContext);
  if (user && user.username && user.password)
    return (
      <div>
        <h1>USER PROFILE</h1>
        <h2>USERNAME: {user.username}</h2>
      </div>
    );

  return <div>User not Found! Login Again</div>;
}

export default Home;
