import React from "react";

import AppHeader from "./components/Header";
import Agenda from "./components/Agenda";

class App extends React.Component {
  render() {
    return (
      <div className="agenda">
        <AppHeader />
        <Agenda />
      </div>
    );
  }
}

export default App;
