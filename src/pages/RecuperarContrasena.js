import React from "react";
import FormularioRecuperarContrasena from "../components/FormularioRecuperarContrasena.jsx";
import "../styles/AuthPages.css";

const RecuperarContrasena = () => {
    return (
     <>
      <div className="recuperar-contrasena-page">
        <div className="signup-card">
          <FormularioRecuperarContrasena />
        </div>
      </div>
      </>
    );
  };
  
  export default RecuperarContrasena;