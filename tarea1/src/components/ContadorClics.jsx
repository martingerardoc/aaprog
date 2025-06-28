import React, { useState } from "react";

function ContadorClics() {
  const [contador, setContador] = useState(0);

  const contarClicks = () => {
    setContador(contador + 1);
  };

  const resetearContador = () => {
    setContador(0);
  };

  return (
    <div>
      <button onClick={contarClicks}>Contar Clics</button>
      <button onClick={resetearContador}>Resetear</button>
      <p>Clics: {contador}</p>
    </div>
  );
}

export default ContadorClics;