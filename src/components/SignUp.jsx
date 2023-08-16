import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:4500/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }

    // ApI take data in string format i.e body: { name, email, password } -->> body: JSON.stringify({ name, email, password })

    // The JSON.stringify() static method converts a JavaScript value to a JSON string console.log(JSON.stringify({ x: 5, y: 6 })); -->> '{"x":5,"y":6}'

    // The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string.  const obj = JSON.parse('{"ndndn":true, "snns":42}'); -->> Object { ndndn: true, snns: 42 }
  };

  return (
    <div className="inputBox">
      <h1>Register</h1>
      <div>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          placeholder="Enter Password"
        />
        <button onClick={collectData} className="but_sty" type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
