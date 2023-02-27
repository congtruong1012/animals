import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Login(props) {
  const { isLoading, login } = useContext(AuthContext);
  return (
    <>
      <button onClick={login}>{isLoading ? "loading..." : "login"}</button>
      
    </>
  );
}

Login.propTypes = {};

export default Login;
