import React from 'react';
import '../styles/NotificacionChat.css';

const ChatDisponible = ({ imgSrc, groupName, lastUserMessage }) => {
  return (
    <div className="avaliable-chat-group">
      <img src={imgSrc} alt="Chat Thumbnail" className="chat-thumbnail" />
      <div className="group-chat-preview">
        <span className="group-name">{groupName}</span>
        <span className="preview-message">
          <span className="last-user-message">{lastUserMessage.user}:</span>
          {lastUserMessage.text}
        </span>
      </div>
    </div>
  );
};

export default ChatDisponible;
