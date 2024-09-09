import React from 'react';
import './ParcheCard.css'; 

const ParcheCard = () => {
    return (
        <div className="parche-card-v1">
            <div className="header-card-v1">
                <img
                    src="https://cdn-icons-png.freepik.com/512/3686/3686930.png"
                    className="profile-card-v1"
                    alt="Profile"
                />
                <div className="textual-content-header-card-v1">
                    <span className="username-card-v1">
                        .username creó un parche
                    </span>
                    <p>.fecha</p>
                </div>
            </div>
            <div className="featured-card-v1">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
                    className="featured-img-card-v1"
                    alt="Featured"
                />
                <div className="date-card-v1">
                    <span className="day">XX</span>
                    <span className="month">.mon</span>
                </div>
            </div>
            <div className="body-card-v1">
                <h3>.title of the parche</h3>
                <p> from .startdate to .enddate</p>
                <div className="bar-card-v1">
                    <div className="registered-card-v1">
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
                    <i className="far fa-heart"></i>
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
