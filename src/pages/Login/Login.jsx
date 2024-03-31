import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPass("");
    if (username == "admin" && pass == "admin123") {
      sessionStorage.setItem("isAdmin", "true");
      useNavigate("/home");
    } else {
      alert("incorrect password");
    }
  };

  return (
    <section>
      <div className="loginBox">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={username}
            id="name"
          />
          <label>Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="pass"
          />
          <button type="submit" className="btn">
            login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
