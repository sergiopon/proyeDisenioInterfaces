import React from "react";
import { Box, Typography } from "@mui/material";
import FormularioCreacionParche from "../components/FormularioNuevoParche.jsx";
import Header from '../components/Header.jsx'
import "../styles/CrearParche.css";

const CrearParche = () => {
  return (
    <>
      <div className="banner-page">
        <h1>Crea un nuevo Parche</h1>
      </div>
      <div className="crear-parche-ctn">
        <><FormularioCreacionParche /></>
      </div>
    </>

  );
};

export default CrearParche;
