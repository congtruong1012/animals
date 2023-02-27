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
      <a target="_blank" href={animal?.url} rel="noreferrer">
        <h2>{animal?.name}</h2>
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
      <p>
        <b>Color:</b> {animal?.colors?.primary}
      </p>
      <p>
        <b>Age:</b> {animal?.age}
      </p>
      <p>{animal?.description}</p>
    </div>
  );
}

Animal.propTypes = {};

export default Animal;
