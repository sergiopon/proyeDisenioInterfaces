import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.js';
import CrearCuenta from './pages/CrearCuenta.js';
import CrearParche from './pages/CrearParche.js';
import IniciarSesion from './pages/IniciarSesion.js';
import ParcheIndividual from './pages/ParcheIndividual.js'; // Asegúrate de que este sea el archivo correcto
import Profile from "./pages/Profile.js";
import ParchesQueMeInteresan from "./pages/ParchesQueMeInteresan.js";
import Notificaciones from "./pages/Notificaciones.js";
import RecuperarContrasena from "./pages/RecuperarContrasena.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/crearparche" element={<CrearParche />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/parcheindividual" element={<ParcheIndividual />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/parchesquemeinteresan" element={<ParchesQueMeInteresan />} />
          <Route path="/recuperarcontraseña" element={<RecuperarContrasena />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
function App() {
    const { listaParche } = useParcheContext(); 

    return (
        <div>
            <Header />
            <FormularioCreacionParche />
            <FilterComponent />
            {listaParche.length > 0 ? (
                listaParche.map((parche, index) => (
                    <ParcheCard key={index} parche={parche} />
                ))
            ) : (
                <p>No hay parches disponibles :(</p>
            )}
        </div>
    );
}
*/
