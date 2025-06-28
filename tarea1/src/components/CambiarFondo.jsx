import React, { useState } from "react";

function CambiarFondo() {
  const [color, setColor] = useState("#FFFFFF");

  const cambiarColor = () => {
    const colores = ["#74ACDF", "#FFFFFF", "#FFD700", "#28A745"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={cambiarColor}>Cambiar Fondo</button>
    </div>
  );
}

export default CambiarFondo;