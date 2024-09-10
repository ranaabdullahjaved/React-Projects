import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);

  const informationSubmitted = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Enter Your Details Here!!!</h1>
      <input
        style={{ margin: 4 }}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={informationSubmitted}>Submit Information</button>
    </div>
  );
}

export default Login;
