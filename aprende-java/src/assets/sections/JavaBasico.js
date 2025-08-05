import React, { useState } from "react";
import Card from "../components/Card";
import QuizModal from "../components/QuizModal";
import holaMundoImg from "../images/HolaMundo.png";
import oracleImg from "../images/oracle.png";
import vscodeImg from "../images/vscode.png";

function JavaBasico() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <section id="java">
      <Card>
        <h2>Java Básico</h2>
        <div id="contenidoPrimerQuiz">
          <ul>
            <li>
              ¿Qué es Java?
              <p>
                Java es un lenguaje de programación de propósito general, orientado a objetos y diseñado para tener la menor cantidad de dependencias de implementación.
                Además es un lenguaje de programación muy popular y ampliamente utilizado en el desarrollo de aplicaciones empresariales, aplicaciones móviles (Android) y mucho más.
              </p>
              <p>
                Para hacer esto más sencillo Java va a ser nuestra herramienta para aprender a expresar lo que imaginamos mediante un medio tecnológico, incluso podemos hacer juegos con él.
              </p>
            </li>
            <li>
              ¿Cómo comenzar a programar?
              <p>
                Para comenzar a programar en Java, necesitarás instalar el JDK (Java Development Kit) en tu computadora. El JDK incluye todo lo necesario para desarrollar aplicaciones Java.
                Digamos que es como un "kit de herramientas" para programadores.
                Puedes descargar Java desde el sitio web oficial de Oracle:{" "}
                
              </p>
              <img
                src={oracleImg}
                alt="Oracle"
                style={{
                  display: "block",
                  margin: "1rem auto",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "2px",
                }}
              />
              <p>
                Una vez que hayas instalado el JDK, nos faltaría un editor de texto o un entorno de desarrollo integrado (IDE), digamos así necesitamos una mesa de trabajo para comenzar a plasmar nuestras ideas.
              </p>
              <p>
                Existen muchos editores de texto y IDEs disponibles, pero algunos de los más populares son:
              </p>
              <ul>
                <li>
                  <a href="https://www.jetbrains.com/idea/download/?section=windows" target="_blank" rel="noopener noreferrer">
                    IntelliJ IDEA
                  </a>
                </li>
                <li>
                  <a href="https://eclipseide.org/" target="_blank" rel="noopener noreferrer">
                    Eclipse
                  </a>
                </li>
                <li>
                  <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">
                    Visual Studio Code
                  </a>
                </li>
              </ul>
              <p>Puedes instalar el que más te sea cómodo, yo usaré Visual Studio Code.</p>
              <p>
                En caso de que tengas alguna duda o inconveniente con alguno de los pasos anteriores puedes comunicarte conmigo si estás en alguna clase conmigo.
              </p>
              <p>
                Una vez que tengas el JDK y un editor de texto o IDE instalado, ya estás listo para comenzar a programar en Java.
              </p>
            </li>
            <li>
              Primeros pasos
              <p>
                El primer programa que vamos a crear es el clásico "Hola, Mundo!". Este programa simplemente imprimirá un mensaje de saludo "Hola, Mundo!" en la consola.
              </p>
              <p>
                Abre tu editor de texto o IDE y crea un nuevo archivo llamado HolaMundo.java. Asegúrate de que la extensión del archivo sea .java. En Visual Studio Code al abrirlo por primera vez podrás observar un menú como el que se ve en la imagen.
                Si no lo ves puedes abrirlo desde la barra de menú en la parte superior izquierda, seleccionando "File" y luego "New File".
              </p>
              <img
                src={vscodeImg}
                alt="Visual Studio Code"
                style={{
                  display: "block",
                  margin: "1rem auto",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "2px",
                }}
              />
              <p>
                Damos click en la opción de "New File...", se desplegará una ventana en la parte superior en la que vas a introducir el nombre de tu archivo "HolaMundo.java", luego solo eliges dónde guardarlo y ¡listo!
              </p>
              <p>
                Listo, una vez creado y abierto el archivo podemos observar un espacio grande en el que podemos escribir. Iremos escribiendo lo siguiente e iré explicando línea a línea:
              </p>
              <img
                src={holaMundoImg}
                alt="Hola Mundo"
                style={{
                  display: "block",
                  margin: "1rem auto",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "2px",
                }}
              />
              <p>1. <code>public class HolaMundo {'{'}</code></p>
              <p>
                Esta línea define una clase llamada "HolaMundo". En Java, todo el código debe estar dentro de una clase, esto quiere decir que debe estar dentro de los corchetes {'{ }'}.
                La palabra clave <b>public</b> significa que la clase es accesible desde cualquier parte del programa (más adelante iremos explicando más de esto).
              </p>
              <p>2. <code>public static void main(String[] args) {'{'}</code></p>
              <p>
                Esta línea define el método principal (main) de la clase. El método main es el punto de entrada de cualquier programa Java.
                La palabra clave <b>static</b> significa que este método puede ser llamado sin crear una instancia de la clase, <b>void</b> significa que este método no devuelve ningún valor.
                Y tú dirás, ¿cómo no devuelve? pero ahí está el HolaMundo, sí pero veámoslo de esta forma, esta clase es como un individuo dando un monólogo, más no alguien que te dé algo físico como un papel, un cartón, etc.
              </p>
              <p>3. <code>System.out.println("Hola, Mundo!");</code></p>
              <p>
                Esta línea imprime el mensaje "Hola, Mundo!" en la consola. <b>System.out</b> es un objeto que representa la salida estándar (la consola) y <b>println</b> es un método que imprime el mensaje seguido de un salto de línea.
                ¿La consola? es como un lugar donde podemos ver lo que el programa nos dice, como un escenario donde el individuo da su monólogo.
              </p>
              <p>4. <code>{'}'}</code> <span>// Fin del método main</span></p>
              <p>
                Esta línea cierra el método main. Es importante cerrar todos los métodos y clases con sus respectivos corchetes como te he mencionado anteriormente.
              </p>
              <p>
                Ahora lo que debemos hacer es simplemente ejecutar nuestro programa, ¿y cómo hacemos esto? Bueno, hay un botón en la parte superior derecha que tiene un símbolo parecido al play de YouTube.
                Si lo presionas, el programa se ejecutará y verás el resultado en la parte inferior de la pantalla, en la consola.
              </p>
            </li>
          </ul>
        </div>
        <section id="quiz">
          <div style={{ marginTop: "2rem" }}>
            <h2>Preguntas</h2>
            <button
              onClick={() => setQuizOpen(true)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "hsl(221, 52%, 58%)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Realizar Quiz
            </button>
          </div>
        </section>
        <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
      </Card>
    </section>
  );
}

export default JavaBasico;