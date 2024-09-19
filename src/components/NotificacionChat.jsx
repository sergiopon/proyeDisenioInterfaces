import React from 'react';
import ChatDisponible from './ChatDisponible';
import '../styles/NotificacionChat.css';

const chatGroups = [
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Estatua_de_Cristo_Rey_-_Cali%2C_Colombia.jpg',
    groupName: 'Subida grupal a Cristo Rey',
    lastUserMessage: { user: 'Isabella', text: 'Al fin diseñar implementar un chat :)' }
  },
  {
    imgSrc: 'https://galeriasalamarte.com/cdn/shop/collections/acuarela_editada.jpg?v=1722555010',
    groupName: 'Clases de acuarela',
    lastUserMessage: { user: 'Lorena', text: 'Chicos no voy a poder ir a clase hoy :(' }
  }
];

const MainChat = () => {
  return (
    <div className="chat-main-ctn">
      <div className="chat-sidebar">
        <input placeholder="Buscar chat" />
        <div className="groups-chat-wrapper">
          {chatGroups.map((group, index) => (
            <ChatDisponible
              key={index}
              imgSrc={group.imgSrc}
              groupName={group.groupName}
              lastUserMessage={group.lastUserMessage}
            />
          ))}
        </div>
      </div>
      
      <div className="--dark-theme" id="chat">
        <div className="chat-conversation-board">
          <div className="chat-conversation-board-message-container">
            <div className="chat-conversation-board-message-person">
              <div className="chat-conversation-board-message-person-avatar">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Monika Figi"/>
              </div>
              <span className="chat-conversation-board-message-person-nickname">Monika Figi</span>
            </div>
            <div className="chat-conversation-board-message-context">
              <div className="chat-conversation-board-message-bubble">
                <span>Somewhere stored deep, deep in my memory banks is the phrase &quot;It really whips the llama's ass&quot;.</span>
              </div>
            </div>
            <div className="chat-conversation-board-message-options">
              <button className="btn-icon chat-conversation-board-message-option-button option-item emoji-button">
                <i className="far fa-smile"></i>
              </button>
              <button className="btn-icon chat-conversation-board-message-option-button option-item more-button">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
          {/* Agrega más contenedores de mensajes aquí */}
          <div className="chat-conversation-board-message-container reversed">
            <div className="chat-conversation-board-message-person">
              <div className="chat-conversation-board-message-person-avatar">
                <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="Dennis Mikle"/>
              </div>
              <span className="chat-conversation-board-message-person-nickname">Dennis Mikle</span>
            </div>
            <div className="chat-conversation-board-message-context">
              <div className="chat-conversation-board-message-bubble">
                <span>Winamp's still an essential.</span>
              </div>
            </div>
            <div className="chat-conversation-board-message-options">
              <button className="btn-icon chat-conversation-board-message-option-button option-item emoji-button">
                <i className="far fa-smile"></i>
              </button>
              <button className="btn-icon chat-conversation-board-message-option-button option-item more-button">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="chat-conversation-panel">
          <div className="chat-conversation-panel-container">
            <button className="chat-conversation-panel-button panel-item btn-icon add-file-button">
              <i className="fas fa-plus"></i>
            </button>
            <button className="chat-conversation-panel-button panel-item btn-icon emoji-button">
              <i className="far fa-smile"></i>
            </button>
            <input className="chat-conversation-panel-input panel-item" placeholder="Type a message..." />
            <button className="chat-conversation-panel-button panel-item btn-icon send-message-button">
              <i className="fas fa-paper-plane" style={{ fontSize: '14px', color: 'currentColor' }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChat;
