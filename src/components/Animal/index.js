import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";
import "./animal.css";

function Animal({ animal }) {
  return (
    <div className="animal">
      <div className="animal__image">
        <Image src={animal?.primary_photo_cropped?.small} alt={animal?.name} />
      </div>
      <div className="animal__desc">
        <a
          className="animal__link"
          target="_blank"
          href={animal?.url}
          rel="noreferrer"
        >
          <h3>{animal?.name}</h3>
        </a>
        <p>
          <b>Type:</b> {animal?.type}
        </p>
        <p>
          <b>Species:</b> {animal.species}
        </p>
        <p>
          <b>Breeds:</b> {animal?.breeds?.primary}
        </p>
      </div>
    </div>
  );
}

Animal.propTypes = {};

export default Animal;
