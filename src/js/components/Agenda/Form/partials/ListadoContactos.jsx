import React from "react";
import PropTypes from "prop-types";

class ListadoContactos extends React.Component {
  constructor(props) {
    super();
    this.state = { telefono: props.telefono, nombre: props.nombre, apellido: props.apellido };
  }

  onHandleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange() {
    this.props.onChange(this.state.nombre, this.state.apellido, this.state.telefono)
  }

  render() {
    return (
      <div className="agenda-form_inputs ">
        <div>
          <input className="common-input_text" placeholder="Nombre" name="nombre" type="text" value={this.state.nombre}
            onChange={(e) => this.onHandleChange(e)} />
          <input className="common-input_text" placeholder="Apellido" name="apellido" type="text" value={this.state.apellido}
            onChange={(e) => this.onHandleChange(e)} />
          <input className="common-input_text" placeholder="(809) 123-4567" name="telefono" type="text" value={this.state.telefono}
            onChange={(e) => this.onHandleChange(e)} />
          <button className="common-button add" onClick={this.handleChange.bind(this)}>ADD</button>
        </div >
      </div>
    );
  }
}

ListadoContactos.propTypes = {
  telefono: PropTypes.string
};

export default ListadoContactos;
