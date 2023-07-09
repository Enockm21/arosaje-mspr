import React, { useState } from 'react';
import './DiscussionPage.css';

const DiscussionPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);

  const sendMessage = () => {
    if (newMessage.trim() !== '' && selectedFriend) {
      const message = {
        id: messages.length + 1,
        content: newMessage,
        sender: 'Vous', // Remplacez par votre nom ou nom d'utilisateur
        receiver: selectedFriend,
        timestamp: new Date().toLocaleString() // Ajoutez un horodatage au message
      };

      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'entrer') {
      sendMessage();
    }
  };

  const friendsList = [
    'Carla',
    'Paul',
    'charles',
    'Sophia',
    'Eric',
    'Thomas',
    'Alexi',
    'Lola',
    'Alexander',
    'Daniel',
    'Charlotte',
    'David',
    'Joseph',
    'Benjamin',
  ]; // Remplacez par de vrais noms d'amis ou d'utilisateurs

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };

  const friendMessages = messages.filter((message) => message.receiver === selectedFriend);

  return (
    <div className="discussion-page">
      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          {friendsList.map((friend, index) => (
            <li
              key={index}
              onClick={() => handleFriendClick(friend)}
              className={selectedFriend === friend ? 'selected' : ''}
            >
              {friend}
            </li>
          ))}
        </ul>
      </div>
      <div className="discussion-container">
        {selectedFriend && (
          <div className="discussion-messages">
            {friendMessages.map((message) => (
              <div
                className={`message ${message.sender === 'You' ? 'message-left' : 'message-right'}`}
                key={message.id}
              >
                <div className="message-content">
                  <div className="sender">{message.sender}</div>
                  <div className="timestamp">{message.timestamp}</div>
                </div>
                <div className="content">{message.content}</div>
              </div>
            ))}
          </div>
        )}
        <div className="discussion-input">
          {selectedFriend && <div className="selected-friend">Envoi d'un message à: {selectedFriend}</div>}
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Rédigez votre message..."
          />
          <button className="entrer-button" onClick={sendMessage}>entrer</button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;