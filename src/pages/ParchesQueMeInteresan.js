import React from "react";
import Header from '../components/Header.jsx'
import "../styles/ParchesQueMeInteresan.css";

const ParchesQueMeInteresan = () => {
  const parches = [
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e9/63/a5/plano-general-museo-la.jpg?w=1200&h=-1&s=1",
      title: "Visita grupal a la Tertulia",
      location: "Cali, Valle del Cauca",
      date: "8 de septiembre",
      link: "#"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQYDjoGeNK5jdd-q5gMqjJqUWXIANqG1F6A&s",
      title: "Subida a Cristo Rey",
      location: "Cali, Valle del Cauca",
      date: "12 de septiembre",
      link: "#"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQYDjoGeNK5jdd-q5gMqjJqUWXIANqG1F6A&s",
      title: "Subida a Cristo Rey",
      location: "Cali, Valle del Cauca",
      date: "12 de septiembre",
      link: "#"
    }
  ];
  
  return (
    <>
      <div className="banner-page">
        <h1>Parches que me interesan</h1>
      </div>
      <div className="parches-me-interesan-ctn">
        <div className="parches-que-me-interesan-wrapper">
          {parches.map((parche, index) => (
            <div className="liked-parche" key={index}>
              <img src={parche.image} className="liked-parche-img" alt={parche.title} />
              <div className="liked-parche-ctn">
                <a href={parche.link}>{parche.title}</a>
                <span className="liked-parche-data">
                  {parche.location} - 
                  <span className="liked-parche-date">{parche.date}</span>
                </span>
              </div>
              <div className="liked-parche-btn">
                <a href={parche.link}>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="/homepage" class="standard-btn">Explorar parches</a>
      </div>
    </>
  );
};

export default ParchesQueMeInteresan;
