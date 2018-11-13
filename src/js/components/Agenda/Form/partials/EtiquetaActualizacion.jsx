import React from "react";
import PropTypes from "prop-types";

const addLabel = ({ visible }) =>
  visible && (
    <div className="agenda-form_etiqueta_actualizacion">
      <span className="etiqueta">Add Contact</span>
    </div>
  );

addLabel.propTypes = {
  visible: PropTypes.bool
};

export default addLabel;
