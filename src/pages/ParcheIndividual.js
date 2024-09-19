import ReviewSlider from "../components/ReviewSlider.jsx";
import UsuariosInscritos from "../components/UsuariosRegistrados.jsx";
import Commentaries from "../components/Comentario.jsx";
import ProfileWidget from "../components/ProfileWidget.jsx";
import petfriendly from "../assets/images/petfriendly.png";
import discapacitados from "../assets/images/discapacitados.png";
import gratuito from "../assets/images/gratuito.png";
import "../styles/ParcheIndividual.css";

const ParcheIndividual = () => {
  return (
    <>
      <div className="parche-individual-main-ctn">
        <div className="parche-content-indv-page">
          <div className="parche-indv-header">
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f0/78/40/2018-04-15-01-016-largejpg.jpg?w=1200&h=1200&s=1"
              className="parche-featured-img"
              alt="Featured"
            />
            <a className="standard-btn indv-action-btn">Inscribirme al parche</a>
          </div>
          <h1>Subida grupal a Cristo Rey</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
            molestie erat lacus, ut faucibus orci ornare id. Phasellus sed viverra 
            purus. Vestibulum posuere arcu velit, mattis convallis purus tristique 
            sit amet. Morbi a eleifend eros, in tincidunt dolor. Aliquam lacinia 
            dolor elementum tortor convallis laoreet. Sed nisi lacus, elementum a 
            posuere in, consectetur vel felis. Aenean tincidunt sit amet erat sed 
            posuere. Integer convallis vulputate risus. Proin in ante rhoncus, 
            ultrices nisi quis, porttitor arcu. Nunc eget lacus tellus. Cras sit 
            amet imperdiet enim.
          </p>
          <div className="individual-icons-ctn">
            <div className="individual-icon-box">
              <img src={petfriendly} alt="Pet-friendly" />
              <span>Pet-friendly</span>
            </div>
            <div className="individual-icon-box">
              <img src={gratuito} alt="Gratuito" />
              <span>Gratuito</span>
            </div>
            <div className="individual-icon-box">
              <img src={discapacitados} alt="Apto para discapacitados" />
              <span>Apto para discapacitados</span>
            </div>
          </div>
          <hr />
          <h2>Reviews sobre el organizador</h2>
          <ReviewSlider />
        </div>

        <div className="parche-data">
          <UsuariosInscritos />
          <Commentaries />
          <ProfileWidget buttonText="Ver perfil" />
        </div>
      </div>
    </>
  );
};

export default ParcheIndividual;
