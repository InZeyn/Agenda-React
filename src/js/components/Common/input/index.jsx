import React from "react";
import PropTypes from "prop-types";

const Input = ({ className, value, placeholder }) => {
  return (
    <input
      className={`common-input_text ${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.defaultProps = {
  className: ""
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string
};

export default Input;
