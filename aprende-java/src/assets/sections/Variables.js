import React, { useState } from "react";
import Card from "../components/Card";
import SolucionModal from "../components/SolucionModal";

function Variables() {
  const [solucionOpen, setSolucionOpen] = useState(false);

  return (
    <section id="Variables">
      <Card>
        <h2>Variables y tipos de datos</h2>
        <p>
          Las variables son contenedores que almacenan datos, digamos son como empaques, en cada empaque va un producto en específico, un jugo, un ponqué, una gomita, etc.
          En Java, debes declarar el tipo de dato de la variable (es como elegir el tipo de empaque para nuestro producto) antes de usarla. Algunos tipos de datos comunes son:
        </p>
        <ul>
          <li><strong>int</strong>: Números enteros (ejemplo: 5, -10)</li>
          <li><strong>double</strong>: Números decimales (ejemplo: 3.14, -0.5)</li>
          <li><strong>char</strong>: Un solo carácter (ejemplo: 'a', '1')</li>
          <li><strong>String</strong>: Cadena de texto (ejemplo: "Hola", "Java")</li>
          <li><strong>boolean</strong>: Verdadero o falso (ejemplo: true, false)</li>
          <li><strong>byte</strong>: Números enteros pequeños (ejemplo: 100, -50)</li>
          <li><strong>float</strong>: Números decimales pequeños (ejemplo: 3.14f, -0.5f)</li>
        </ul>
        <p>Para declarar una variable, usas la siguiente sintaxis:</p>
        <ul>
          <li>Si queremos que por defecto tengan un valor inicial:</li>
        </ul>
        <p><code>tipoDeDato nombreDeVariable = valor;</code></p>
        <ul>
          <li>Si queremos que al principio esté vacía y luego asignarle un valor:</li>
        </ul>
        <p><code>tipoDeDato nombreDeVariable;</code></p>
        <p>Ejemplo:</p>
        <p><code>int edad = 25;</code></p>
        <p>Esto significa que hemos creado una variable llamada "edad" de tipo entero y le hemos asignado el valor 25.</p>
        <p>Para las variables que almacenan letras hacemos algo similar, solo que debemos usar comillas</p>
        <p><code>String nombre = "Kimberly";</code></p>
        <ul>
          <li>Recuerda que en Java, los nombres de las variables son sensibles a mayúsculas y minúsculas, lo que significa que "edad" y "Edad" son dos variables diferentes.</li>
          <li>También es importante tener en cuenta que los nombres de las variables no se pueden repetir, esto causaría conflictos, ya que estaríamos creando una variable duplicada.</li>
        </ul>
        <p>Por ejemplo, si intentamos declarar dos variables con el mismo nombre:</p>
        <p><code>int edad = 25;</code></p>
        <p><code>int edad = 30;</code></p>
        <p>Esto causaría un error porque ya hemos declarado una variable llamada "edad".</p>
        <p>Si quieres cambiar el valor de una variable, simplemente asignas un nuevo valor:</p>
        <p><code>edad = 30;</code></p>
        <p>Ahora la variable "edad" tiene el valor 30.</p>
        <p>
          Ahora para mostrarle al usuario ese valor que hemos almacenado lo que hacemos es imprimir un mensaje como te he explicado anteriormente, pero esta vez fuera de las comillas vamos a poner <code>+ nombreDeVariable</code> para que el contenido que almacena esta variable se muestre en consola.
        </p>
        <p>Por ejemplo:</p>
        <p><code>System.out.println("La edad es: " + edad);</code></p>
        <p>Esto imprimirá "La edad es: 30" en la consola.</p>
        <p>
          Recuerda que las variables son muy importantes porque nos permiten almacenar y manipular datos en nuestros programas. Puedes pensar en ellas como cajas donde guardamos nuestro producto que podemos usar más tarde.
        </p>
        <ul>
          <li>Entrada y Salida de Datos</li>
        </ul>
        <p>
          Para interactuar con el usuario, Java proporciona clases como Scanner para leer la entrada del usuario y System.out para imprimir mensajes en la consola.
        </p>
        <p>Ejemplo de cómo usar Scanner para leer la entrada del usuario:</p>
        <p><code>import java.util.Scanner;</code></p>
        <p><code>public class EjemploScanner {'{'}</code></p>
        <p><code> public static void main(String[] args) {'{'}</code></p>
        <p><code>   Scanner scanner = new Scanner(System.in);</code></p>
        <p><code>   System.out.print("Ingresa tu nombre: ");</code></p>
        <p><code>   String nombre = scanner.nextLine();</code></p>
        <p><code>   System.out.println("Hola, " + nombre + "!");</code></p>
        <p><code> {'}'} </code></p>
        <p><code>{'}'}</code></p>
        <p>
          En este ejemplo, importamos la clase Scanner, creamos un objeto Scanner llamado "scanner" y usamos el método nextLine() para leer una línea de texto ingresada por el usuario.
        </p>
        <p>
          Luego, imprimimos un saludo personalizado usando System.out.println(). Aquí como te puedes dar cuenta encerramos el texto "Hola, " entre paréntesis, luego con un símbolo + agregamos el nombre que el usuario ingresó al texto y por último agregamos un "!". Esto se conoce como concatenar.
        </p>
        <ul>
          <li>Ejercicio</li>
        </ul>
        <p>
          Puedes hacer el siguiente ejercicio para practicar un poco lo que has aprendido: Realiza un programa que le pida al usuario su nombre, edad y ciudad de residencia. Luego imprime un mensaje que diga "Hola, [nombre], tienes [edad] años y vives en [ciudad]."
        </p>
        <section id="solucionEjercicio">
          <div style={{ marginTop: "2rem" }}>
            <h2>Solución ejercicio</h2>
            <button
              onClick={() => setSolucionOpen(true)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "hsl(221, 52%, 58%)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Ver solución
            </button>
          </div>
        </section>
        <SolucionModal open={solucionOpen} onClose={() => setSolucionOpen(false)} />
        <p>
          Ya puedes hacer muchas cosas con solo estas variables, deja que tu imaginación te guíe y comienza a practicar y apropiarte de los conceptos.
        </p>
      </Card>
    </section>
  );
}

export default Variables;