import React from "react";
import FormularioCrearCuenta from "../components/FormularioCrearCuenta.jsx";
import "../styles/AuthPages.css";
import crearcuentaImage from "../assets/images/signup.png";

const CrearCuenta = () => {
    return (
      <>
      <div className="signup-container">
        <div className="signup-card">
          <span className="welcome-text">¡Welcome to the family!</span>
          <FormularioCrearCuenta />
        </div>
        <div className="signup-image">
          <img src={crearcuentaImage} alt="Tuparche" />
        </div>
      </div>
    </>
    );
  };
  
export default CrearCuenta;