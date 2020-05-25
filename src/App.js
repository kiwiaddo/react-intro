import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havenese" />
      <Pet name="Duffy" animal="Bird" breed="Parrot" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
