import React from "react";
import FormularioInicioSesion from "../components/FormularioInicioSesion.jsx";
import "../styles/AuthPages.css";
import iniciarsesionImage from "../assets/images/login.png";

const IniciarSesion = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <span className="welcome-text">Bienvenido :)</span>
          <FormularioInicioSesion />
        </div>
        <div className="signup-image">
          <img src={iniciarsesionImage} alt="Tuparche" />
        </div>
      </div>
    </>
  );
};

export default IniciarSesion;
