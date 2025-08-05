import React from "react";
import Card from "../components/Card";
import cookGif from "../images/cook.gif";
import paintGif from "../images/paint.gif";

function Programacion() {
  return (
    <section id="Programacion">
      <Card>
        <h2>Que es la programación</h2>
        <p>
          La programación es el proceso de diseñar y construir un conjunto de instrucciones para que una computadora realice tareas específicas.
        </p>
        <ul>
          <li>
            El objetivo común de un programa es seguir una serie de pasos.
            Recuerdas esa receta de cocina que te enseñaron en la escuela? Bueno, un programa es como una receta, pero en lugar de cocinar comida, le decimos a la computadora qué hacer.
            <img
              src={cookGif}
              alt="Receta de cocina"
              style={{
                display: "block",
                margin: "1rem auto",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "2px",
              }}
            />
          </li>
          <li>
            La programación te permite "pintar" esa página que tienes en mente, crear ese juego que se te ocurrió o incluso hacer que tu computadora haga cosas por ti.
            <img
              src={paintGif}
              alt="Pintar"
              style={{
                display: "block",
                margin: "1rem auto",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "2px",
              }}
            />
          </li>
          <li>
            La programación es una habilidad muy valiosa en el mundo actual, ya que muchas industrias dependen de la tecnología y el software para funcionar.
          </li>
          <li>
            Programar no tiene por qué ser una tarea aburrida, al contrario, es una forma de expresarte y crear cosas nuevas.
          </li>
          <li>
            La programación es una habilidad que se puede aprender y mejorar con la práctica.
          </li>
        </ul>
      </Card>
    </section>
  );
}

export default Programacion;