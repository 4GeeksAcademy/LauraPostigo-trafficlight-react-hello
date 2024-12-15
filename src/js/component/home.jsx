import React, { useState } from "react";

function Home() {
  const [colorSeleccionado, setColorSeleccionado] = useState("");

  function rojo() {
    setColorSeleccionado("red");
  }

  function amarillo() {
    setColorSeleccionado("yellow");
  }

  function verde() {
    setColorSeleccionado("green");
  }

  return (
    <div>
      <div className="traffic-light">
        <div
          className={"light red " + (colorSeleccionado === "red" ? "selected" : "")}
          onClick={rojo}
        ></div>
        <div
          className={"light yellow " + (colorSeleccionado === "yellow" ? "selected" : "")}
          onClick={amarillo}
        ></div>
        <div
          className={"light green " + (colorSeleccionado === "green" ? "selected" : "")}
          onClick={verde}
        ></div>
      </div>
    </div>
  );
}

export default Home;
