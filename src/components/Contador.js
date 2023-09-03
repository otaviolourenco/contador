import React, { useState } from 'react';
import './Contador.css';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const contaCliques = contador !== 1 ? 'cliques' : 'clique';
  const cliqueTexto = `${contaCliques}`;

  return (
    <div>
      <h2>Contador de Cliques</h2>
      <p>
        <span id="colorContador">{contador} </span>
        {cliqueTexto}
      </p>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
}

export default Contador;
