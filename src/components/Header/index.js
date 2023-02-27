import { faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header(props) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__link">
          Animal
        </Link>
        <div className="header__search">
          <input className="header__search-input" placeholder="Search..." />
          <FontAwesomeIcon className="header__search-icon" icon={faSearch} />
        </div>
        <FontAwesomeIcon className="header__logout" icon={faSignOut} />
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
