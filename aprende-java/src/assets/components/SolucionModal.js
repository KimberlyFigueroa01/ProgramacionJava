import React, { useState, useRef } from "react";

function SolucionModal({ open, onClose }) {
  const [paso, setPaso] = useState(0);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [salida, setSalida] = useState("");
  const inputRef = useRef(null);

  const iniciarSimulador = () => {
    setPaso(0);
    setNombre("");
    setEdad("");
    setCiudad("");
    setSalida("");
    setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
  };

  const mostrarPaso = () => {
    if (paso === 0) return "Ingresa tu nombre: ";
    if (paso === 1) return "Ingresa tu edad: ";
    if (paso === 2) return "Ingresa tu ciudad: ";
    return "";
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      if (paso === 0) {
        if (!e.target.value.trim()) {
          setSalida("Por favor, ingresa tu nombre.");
          return;
        }
        setNombre(e.target.value.trim());
        setSalida("");
        setPaso(1);
        e.target.value = "";
      } else if (paso === 1) {
        if (!e.target.value.trim()) {
          setSalida("Por favor, ingresa tu edad.");
          return;
        }
        setEdad(e.target.value.trim());
        setSalida("");
        setPaso(2);
        e.target.value = "";
      } else if (paso === 2) {
        if (!e.target.value.trim()) {
          setSalida("Por favor, ingresa tu ciudad.");
          return;
        }
        setCiudad(e.target.value.trim());
        setSalida("");
        setPaso(3);
      }
    }
  };

  const handleEjecutar = () => {
    iniciarSimulador();
  };

  const handleClose = () => {
    setPaso(0);
    setNombre("");
    setEdad("");
    setCiudad("");
    setSalida("");
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
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        <h2>Solución del ejercicio</h2>
        <form>
          <p>import java.util.Scanner;</p>
          <p>public class Ejercicio {'{'}</p>
          <p> public static void main(String[] args) {'{'}</p>
          <p>   Scanner scanner = new Scanner(System.in);</p>
          <p>   System.out.print("Ingresa tu nombre: ");</p>
          <p>   String nombre = scanner.nextLine();</p>
          <p>   System.out.print("Ingresa tu edad: ");</p>
          <p>   int edad = scanner.nextInt();</p>
          <p>   scanner.nextLine(); // Limpiar el buffer de entrada</p>
          <p>   System.out.print("Ingresa tu ciudad: ");</p>
          <p>   String ciudad = scanner.nextLine();</p>
          <p>   System.out.println("Hola, " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");</p>
          <p> {'}'} </p>
          <p>{'}'}</p>
        </form>
        
        <div id="simuladorJava" style={{ marginTop: "1rem", display: paso >= 0 ? "block" : "none" }}>
          <div
            style={{
              background: "#222",
              color: "#0f0",
              padding: "1rem",
              borderRadius: "5px",
              fontFamily: "Consolas, monospace",
              minHeight: "120px",
            }}
          >
            <span>{paso < 3 ? mostrarPaso() : ""}</span>
            {paso < 3 && (
              <input
                ref={inputRef}
                type={paso === 1 ? "number" : "text"}
                style={{
                  background: "#111",
                  color: "#0f0",
                  border: "none",
                  borderBottom: "1px solid #0f0",
                  outline: "none",
                  fontFamily: "Consolas, monospace",
                  width: "80%",
                }}
                autoComplete="off"
                onKeyDown={handleInput}
                disabled={paso > 2}
              />
            )}
          </div>
          <div style={{ marginTop: "1rem", fontWeight: "bold", color: "#222" }}>
            {paso === 3
              ? `Hola, ${nombre}, tienes ${edad} años y vives en ${ciudad}.`
              : salida}
          </div>
        </div>
        <button
          onClick={handleClose}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Cerrar solución
        </button>
      </div>
    </div>
  );
}

export default SolucionModal;