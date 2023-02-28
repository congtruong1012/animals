import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './login.css'
function Login(props) {
  const { isLoading, login } = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <button className="login" onClick={login}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}

Login.propTypes = {};

export default Login;
