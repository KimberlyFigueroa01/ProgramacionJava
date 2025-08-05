import React from "react";
import Card from "../components/Card";

function Proyectos() {
  return (
    <section id="proyectos">
      <Card>
        <h2>Proyectos Finales</h2>
        <p>
          Ideas de mini-proyectos para poner en práctica tus conocimientos de programación.
        </p>
        <ul>
          <li>Calculadora básica en Java</li>
          <li>Agenda de contactos (con consola)</li>
          <li>Juego de adivinar el número</li>
          <li>Conversor de monedas</li>
          <li>Gestor de tareas simple</li>
          <li>Simulador de cajero automático</li>
        </ul>
        <p>
          ¡Elige uno y pon en práctica lo aprendido!
        </p>
      </Card>
    </section>
  );
}

export default Proyectos;