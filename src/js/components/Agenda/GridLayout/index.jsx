import React from "react";
import PropTypes from "prop-types";
import Collapsible from "./partials/Collapsible";
import Columns from "./partials/columns";

class Grid extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <header />
        <Columns />
        <div>
          <div className="panel-group">
            {contacts.length > 0
              ? contacts.map(contact => {
                const { id, nombre, telefono, apellido } = contact;
                const { action } = this.props;
                return (
                  <Collapsible
                    key={id}
                    id={id}
                    nombre={nombre}
                    apellido={apellido}
                    action={action}
                  >
                    <p>{telefono}</p>
                  </Collapsible>
                );
              })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
Grid.propTypes = {
  apellido: PropTypes.string,
  nombre: PropTypes.string,
  id: PropTypes.number
};
export default Grid;
