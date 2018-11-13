import React from "react";
import PropTypes from "prop-types";

import Form from "./Form";
import Grid from "./GridLayout";

class Agenda extends React.Component {
  constructor() {
    super();
    this.handlerRemove = this.handlerRemove.bind(this);
    this.state = {
      contacts: [],
      nombre: null,
      apellido: null,
      telefono: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  fetchData() {
    this.setState({
      contacts: []
    });

    fetch("http://www.raydelto.org/itla/agenda")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map((user, index) => ({
          id: `${index}`,
          nombre: `${user.nombre} `,
          apellido: `${user.apellido}`,
          telefono: `${user.telefono}`
        }))
      )
      .then(contacts =>
        this.setState({
          contacts
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  handleChange(nombre, apellido, telefono) {
    const { contacts } = this.state;
    const data = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono
    }
    console.log(JSON.stringify(data));
    console.log(nombre, apellido, telefono);
    this.setState({
      nombre: nombre,
      apellido: apellido,
      telefono: telefono
    });

    fetch("http://www.raydelto.org/itla/agenda/", {
      method: 'POST',
      body: JSON.stringify(data),
    });


    contacts.unshift({
      id: contacts.length,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono
    });

    this.setState({
      contacts
    });
  }

  handlerRemove(id) {
    const { contacts } = this.state;
    console.log(contacts.id);
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1);
        break;
      }
    }
    this.setState({
      messageShown: true,
      contacts
    });
  }

  onDelete(e) {
    const id = this.e;
    console.log(e);
    const { contacts } = this.state;

    contacts.splice(id, 2);
    this.setState({
      contacts
    });
  }

  render() {
    const { contacts, telefono, nombre, apellido } = this.state;
    return (
      <div className="agenda">
        <Form
          onChange={this.handleChange}
          telefono={telefono}
          nombre={nombre}
          apellido={apellido}
        />
        <h1>
          <button
            className="common-button primario"
            onClick={e => {
              this.fetchData();
            }}
          >
            Mostrar Listado
          </button>
        </h1>
        <Grid contacts={contacts} action={this.handlerRemove} />
      </div>
    );
  }
}

Agenda.propTypes = {
  contacts: PropTypes.object
};

export default Agenda;
