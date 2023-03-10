import PropTypes from "prop-types";
import noImage from "../../Images/no-image.png";

function Image(props) {
  const { src = noImage, alt, className, fallback = noImage, ...rest } = props;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...rest}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = fallback;
      }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
