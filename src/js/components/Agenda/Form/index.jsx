import React from "react";

import EtiquetaActualizacion from "./partials/EtiquetaActualizacion";
import ListadoContactos from "./partials/ListadoContactos";

class Form extends React.Component {
  render() {
    const { onChange, telefono, nombre, apellido } = this.props;
    return (
      <div className="agenda-form">
        <EtiquetaActualizacion visible />
        <div className="agenda-form_container">
          <ListadoContactos
            onChange={onChange}
            telefono={telefono}
            nombre={nombre}
            apellido={apellido} />
        </div>
      </div>
    );
  }
}

export default Form;
