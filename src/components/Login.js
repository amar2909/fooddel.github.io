import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username, password);
  };

  return (
    <div id="container">
      <div id="loginBox">
        <h2 id="login">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <label id="label">
            Username:
            <input
              id="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label id="label">
            Password:
            <input
              id="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button id="button" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p id="a">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button id="signup-button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
