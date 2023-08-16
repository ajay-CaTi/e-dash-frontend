import React from "react";

const Login = () => {
  const handleLogin = () => {
    console.log("handleLogin");
  };

  return (
    <div>
      <div className="inputBox">
        <h1>Login</h1>

        <div>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button onClick={handleLogin} className="but_sty" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
