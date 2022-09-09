import React, { useState } from "react";
import Lux from "./Lux.css";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
