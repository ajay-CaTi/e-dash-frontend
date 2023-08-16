import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    let result = await fetch("http://localhost:4500/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      // alert("Login sucessful");
    } else {
      alert("plx enter correct details");
    }
  };

  return (
    <div>
      <div className="inputBox">
        <h1>Login</h1>

        <div>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <button onClick={handleLogin} className="but_sty" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
