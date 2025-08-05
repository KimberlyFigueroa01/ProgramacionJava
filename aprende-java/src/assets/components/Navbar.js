import React from "react";

function Navbar() {
  return (
    <nav style={{
      background: "#1976d2",
      color: "white",
      padding: "0.5rem 1rem",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem"
    }}>
      <a href="#inicio" style={{ color: "white", textDecoration: "none" }}>Inicio</a>
      <a href="#programacion" style={{ color: "white", textDecoration: "none" }}>Programación</a>
      <a href="#java-basico" style={{ color: "white", textDecoration: "none" }}>Java Básico</a>
      <a href="#variables" style={{ color: "white", textDecoration: "none" }}>Variables</a>
      <a href="#operadores" style={{ color: "white", textDecoration: "none" }}>Operadores</a>
      <a href="#proyectos" style={{ color: "white", textDecoration: "none" }}>Proyectos</a>
      <a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
    </nav>
  );
}

export default Navbar;
