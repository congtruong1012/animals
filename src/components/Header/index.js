import { faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";
function Header(props) {
  const { handleLogout } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__link">
          Animal
        </Link>
        {/* <div className="header__search">
          <input className="header__search-input" placeholder="Search..." />
          <FontAwesomeIcon className="header__search-icon" icon={faSearch} />
        </div> */}
        <FontAwesomeIcon
          className="header__logout"
          icon={faSignOut}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
