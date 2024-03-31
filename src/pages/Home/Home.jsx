import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    const isAdminSession = sessionStorage.getItem("isAdmin");
    if (isAdminSession === null) {
      setAuthorized(false);
    } else {
      setAuthorized(true);
    }
  }, []);
  const logout = () => {
    sessionStorage.removeItem("isAdmin");
    setAuthorized(false);
  };
  return authorized ? (
    <section>
      <h1>Welcome to Home Page</h1>
      <button onClick={logout}>Logout</button>
    </section>
  ) : (
    <section>
      <h1>You are not authorized. Please log in first.</h1>
    </section>
  );
};

export default Home;
