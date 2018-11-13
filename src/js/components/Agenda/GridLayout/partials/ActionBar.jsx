import React from "react";
import PropTypes from "prop-types";

import Borrar from "../../../Common/Button";

class ActionBar extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className="agenda-form_action">
        <Borrar
          className="error"
          texto="Remove"
          onClick={() => {
            this.props.action(id);
          }}
        />
      </div>
    );
  }
}

ActionBar.propTypes = {
  id: PropTypes.number
};

export default ActionBar;
