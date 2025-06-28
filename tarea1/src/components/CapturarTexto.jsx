import React, { useState } from "react";

function CapturarTexto() {
  const [texto, setTexto] = useState("");

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={manejarCambio} placeholder="Escribí algo..." />
      <p>Ingresaste: {texto}</p>
    </div>
  );
}

export default CapturarTexto;