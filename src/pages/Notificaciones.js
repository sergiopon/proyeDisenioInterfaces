import Header from '../components/Header.jsx'
import MainChat from '../components/NotificacionChat.jsx';
import "../styles/Notificaciones.css";

const Notificaciones = () => {
    return (
      <>
      <div className="banner-page">
        <h1>Notificaciones</h1>
      </div>
      <div className="chat-ctn">
        <MainChat />
      </div>
    </>
    );
  };
  
  export default Notificaciones;