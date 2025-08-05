import React from "react";
import Card from "../components/Card";

function Operadores() {
  return (
    <section id="Operadores y control de flujo">
      <Card>
        <h2>Operadores y Control de flujo</h2>
        <p>
          Los operadores son símbolos que realizan operaciones en variables y valores. Algunos operadores comunes son:
        </p>
        <ul>
          <li><strong>+</strong>: Suma</li>
          <li><strong>-</strong>: Resta</li>
          <li><strong>*</strong>: Multiplicación</li>
          <li><strong>/</strong>: División</li>
          <li><strong>%</strong>: Módulo (resto de la división)</li>
        </ul>
        <p>
          El control de flujo se refiere a cómo se ejecutan las instrucciones en un programa. Puedes usar estructuras como <code>if</code>, <code>else</code>, <code>switch</code>, <code>for</code> y <code>while</code> para controlar el flujo de tu programa.
        </p>
      </Card>
    </section>
  );
}

export default Operadores;