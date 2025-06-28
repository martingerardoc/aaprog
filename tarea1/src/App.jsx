
import './App.css'
import React from 'react';
import CambiarFondo from '/components/CambiarFondo';
import MostrarMensaje from './components/MostrarMensaje';
import CapturarTexto from './components/CapturarTexto';
import SeleccionarColor from './components/SeleccionarColor';
import ContadorClics from './components/ContadorClics';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ejercicio 1: Cambiar Fondo</h1>
      <CambiarFondo />

      <h1>Ejercicio 2: Mostrar Mensaje</h1>
      <MostrarMensaje />

      <h1>Ejercicio 3: Capturar Texto</h1>
      <CapturarTexto />

      <h1>Ejercicio 4: Seleccionar Color</h1>
      <SeleccionarColor />

      <h1>Ejercicio 5: Contador de Clics</h1>
      <ContadorClics />
    </div>
  
  );
}

export default App
