import React, { useState } from "react";

function SeleccionarColor() {
  const [color, setColor] = useState("#FFFFFF");

  const manejarSeleccion = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <select onChange={manejarSeleccion}>
        <option value="#FFFFFF">Blanco</option>
        <option value="#74ACDF">Celeste</option>
        <option value="#FF0000">Rojo</option>
        <option value="#28A745">Verde</option>
      </select>
    </div>
  );
}

export default SeleccionarColor;