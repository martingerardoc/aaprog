import React, { useState } from "react";

function MostrarMensaje() {
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = () => {
    const mensajes = ["Boca Juniors", "River Plate", "Racing Club", "Independiente", "San Lorenzo"];
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    setMensaje(`El mejor equipo de Argentina es: ${mensajeAleatorio}`);
    console.log(`El mejor equipo de Argentina es: ${mensajeAleatorio}`);
  };

  return (
    <div>
      <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default MostrarMensaje;