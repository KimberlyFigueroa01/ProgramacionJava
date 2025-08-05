import React, { useState } from "react";

function QuizModal({open, onClose}){
    const [score, setScore] = useState(null);
    const [form, setForm] = useState({ q1: "", q2: "", q3: "" });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleEvaluate = (e) => {
        e.preventDefault();
        if(!form.q1 || !form.q2 || !form.q3) {
            alert("Por favor, completa todas las preguntas.");
            return;
        }
        let points = 0;
        if(form.q1 === "correct") points++;
        if(form.q2 === "correct") points++;
        if(form.q3 === "correct") points++;
        setScore('Tu puntuación es: ' + points + '/3');
    };

    const handleClose = () => {
        setScore(null);
        setForm({ q1: "", q2: "", q3: "" });
        onClose();
    };

    if (!open) return null;

    return (
        <div
            style={{
                display: "flex",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2000
            }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "2rem",
                        borderRadius: "10px",
                        maxWidth: "600px",
                        width: "90%"
                    }}
                >
                    <h2>Quiz de Java</h2>
                    <form onSubmit={handleEvaluate}>
                        <p>1. ¿Que significa la palabra clave <code>static</code> en Java?</p>
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="correct"
                                checked={form.q1 === "correct"}
                                onChange={handleChange}
                            />
                           Permite llamar al método sin crear una instancia de la clase
                        </label>
                <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="wrong"
              checked={form.q1 === "wrong"}
              onChange={handleChange}
            />
            Define un tipo de dato
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="wrong2"
              checked={form.q1 === "wrong2"}
              onChange={handleChange}
            />
            Llama a un patito
          </label>
          <br />

          <p>2. ¿Qué método usamos para imprimir por consola un mensaje?</p>
          <label>
            <input
              type="radio"
              name="q2"
              value="wrong"
              checked={form.q2 === "wrong"}
              onChange={handleChange}
            />
            System.in.print()
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q2"
              value="wrong2"
              checked={form.q2 === "wrong2"}
              onChange={handleChange}
            />
            Console.log
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q2"
              value="correct"
              checked={form.q2 === "correct"}
              onChange={handleChange}
            />
            System.out.println()
          </label>
          <br />

          <p>3. ¿Qué extensión debe tener el archivo donde vamos a programar con Java?</p>
          <label>
            <input
              type="radio"
              name="q3"
              value="wrong"
              checked={form.q3 === "wrong"}
              onChange={handleChange}
            />
            .txt
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q3"
              value="wrong2"
              checked={form.q3 === "wrong2"}
              onChange={handleChange}
            />
            .class
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q3"
              value="correct"
              checked={form.q3 === "correct"}
              onChange={handleChange}
            />
            .java
          </label>
          <br />

          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Evaluar
          </button>
          <button
            type="button"
            onClick={handleClose}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            Salir
          </button>
        </form>
        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{score}</p>
      </div>
    </div>
  );
}

export default QuizModal;