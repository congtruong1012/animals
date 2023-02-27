import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { AuthContext } from "../../context/AuthContext";
function Animals(props) {
  const { token } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(() => {
    if (!token) {
      nav("/login");
    }else{
       nav("/");
    }
  }, [token]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

Animals.propTypes = {};

export default Animals;
