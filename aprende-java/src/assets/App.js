import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./sections/Inicio";
import Programacion from "./sections/Programacion";
import JavaBasico from "./sections/JavaBasico";
import Variables from "./sections/Variables";
import Operadores from "./sections/Operadores";
import Proyectos from "./sections/Proyectos";
import Contacto from "./sections/Contacto";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main-container">
        <main>
          <Inicio />
          <Programacion />
          <JavaBasico />
          <Variables />
          <Operadores />
          <Proyectos />
          <Contacto />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;