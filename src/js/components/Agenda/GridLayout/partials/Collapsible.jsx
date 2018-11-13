import React from "react";
import ActionBar from "./ActionBar";
import PropTypes from "prop-types";

class Collapsible extends React.Component {
  render() {
    const { id, nombre, apellido, children } = this.props;
    return (
      <div className="agenda-grid_row">
        <div className="agenda-grid_cell delimiter-right grid-50">
          {nombre}
          {apellido}
        </div>
        <div className="agenda-grid_cell delimiter-right grid-50">
          {children}
        </div>
        <div className="agenda-grid_cell align-center grid-25">
          <ActionBar id={id} action={this.props.action} />
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  id: PropTypes.number
};

export default Collapsible;
