import React, { useState, useEffect, useRef } from 'react';
import '../styles/ParcheCardV1.css';
import ProfilePopup from './ProfilePopUp.jsx';  
import UsuariosInscritos from './UsuariosRegistrados.jsx';

function ParcheCard({
    username, 
    profileImage, 
    fecha, 
    imagenDestacada, 
    dia, 
    mes, 
    titulo, 
    descripcionCorta, 
    likes, 
    comments, 
    usuariosRegistrados
}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isUsuariosVisible, setIsUsuariosVisible] = useState(false);
    const wrapperRef = useRef(null);
    const popupRef = useRef(null);
    const usuariosRef = useRef(null);

    const handleClick = () => {
        setIsPopupVisible((prev) => !prev);
    };

    const handleUsuariosClick = () => {
        setIsUsuariosVisible((prev) => !prev);
    };

    const handleClickOutside = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setIsPopupVisible(false);
        }
        if (usuariosRef.current && !usuariosRef.current.contains(e.target)) {
            setIsUsuariosVisible(false);
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="parche-card-v1" ref={wrapperRef}>
            <div className="header-card-v1">
                <div 
                    className="profile-wrapper"
                    onClick={handleClick}
                >
                    <img
                        src={profileImage}
                        className="profile-card-v1"
                        alt="Profile"
                    />
                </div>
                <div 
                    className="textual-content-header-card-v1"
                    onClick={handleClick}
                >
                    <span className="username-card-v1">
                        {username} creó un parche
                    </span>
                    <p>{fecha}</p>
                </div>
                {isPopupVisible && (
                    <div ref={popupRef} className="profile-popup-wrapper">
                        <ProfilePopup buttonText="Conectar" buttonLink="#" onClose={handleClosePopup} />
                    </div>
                )}
            </div>
            <div className="featured-card-v1">
                <img
                    src={imagenDestacada}
                    className="featured-img-card-v1"
                    alt="Featured"
                />
                <div className="date-card-v1">
                    <span className="day">{dia}</span>
                    <span className="month">{mes}</span>
                </div>
            </div>
            <div className="body-card-v1">
                <h3>{titulo}</h3>
                <p>{descripcionCorta}</p>
                <div className="bar-card-v1">
                    <div className="registered-card-v1" onClick={handleUsuariosClick} ref={usuariosRef}>
                        {usuariosRegistrados.map((usuario, index) => (
                            <img
                                key={index}
                                src={usuario.profileImage}
                                className="registered-card-v1"
                                alt={`Usuario ${index + 1}`}
                            />
                        ))}
                    </div>
                    <i className="far fa-heart"></i>
                    {isUsuariosVisible && (
                    <div className="usuarios-inscritos-wrapper">
                        <UsuariosInscritos usuarios={usuariosRegistrados} />
                    </div>
                )}
                </div>
            </div>
            <div className="footer-card-v1">
                <div className="icon-div-card-v1">
                    <i className="far fa-thumbs-up"></i>
                    <span>{likes}</span>
                </div>
                <div className="icon-div-card-v1">
                    <i className="far fa-comment-alt"></i>
                    <span>{comments}</span>
                </div>
                <div className="icon-div-card-v1">
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
        </div>
    );
}

export default ParcheCard;


/*
const ParcheCard = ({ parche }) => {
    const { organizador, imagenDestacada, fecha, titulo, descripcion } = parche;
    const [username, profileImage] = organizador;

    return (
        <div className="parche-card-v1">
            <div className="header-card-v1">
                <img
                    src={profileImage}
                    className="profile-card-v1"
                    alt="Profile"
                />
                <div className="textual-content-header-card-v1">
                    <span className="username-card-v1">
                        {username} creó un parche
                    </span>
                    <p>{fecha}</p>
                </div>
            </div>
            <div className="featured-card-v1">
                <img
                    src={imagenDestacada}
                    className="featured-img-card-v1"
                    alt="Featured"
                />
                <div className="date-card-v1">
                    <span className="day">XX</span>
                    <span className="month">.mon</span>
                </div>
            </div>
            <div className="body-card-v1">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <div className="bar-card-v1">
                        <img
                            src="https://cdn-icons-png.freepik.com/512/3686/3686930.png"
                            className="registered-card-v1"
                            alt="Registered"
                        />
                        <img
                            src="https://cdn-icons-png.freepik.com/512/3686/3686930.png"
                            className="registered-card-v1"
                            alt="Registered"
                        />
                        <img
                            src="https://cdn-icons-png.freepik.com/512/3686/3686930.png"
                            className="registered-card-v1"
                            alt="Registered"
                        />
                </div>
            </div>
            <div className="footer-card-v1">
                <div className="icon-div-card-v1">
                    <i className="far fa-thumbs-up"></i>
                    <span>.number</span>
                </div>
                <div className="icon-div-card-v1">
                    <i className="far fa-comment-alt"></i>
                    <span>.number</span>
                </div>
                <div className="icon-div-card-v1">
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
        </div>
    );
};

export default ParcheCard;

*/