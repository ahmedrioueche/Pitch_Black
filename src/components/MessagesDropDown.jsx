import React, { useEffect, useRef } from 'react';
import CloseDropDown from '../modules/CloseDropDown'

function MessagesDropDown() {

  const profilePicUrl = 'src/assets/userImg.webp';
  const messages = [
    { id: 1, sender: 'Doggo', profilePic: 'src/assets/dog.jpg',  content: 'Hello there! How are you?' },
    { id: 2, sender: 'Pussy', profilePic: 'src/assets/cat.webp', content: 'Just wanted to say hi!' },
  ];

  return (
    <div className='messagesDropdownMenu'>
      <div className='userInfo'>
        <img src={profilePicUrl} alt="user" className='profileImage' />
        <div className='profileInfo'>
          <div className='profileName'>John Doe</div>
          <div className='profileEmail'>john.doe@example.com</div>
        </div>
      </div>
      <div className='separatorLine'></div>
      <span className='dropDownTitle'>Messages</span>
      <div className='separatorLine'></div>

      <div className='messagesContainer'>
        {messages.map((message) => (
          <div key={message.id} className='menuItem message' onClick={() => handleItemClick(message)}>
            <div className='profileName'>
              <img src={message.profilePic || profilePicUrl} alt="user" className='profileImage' />
              {message.sender}
            </div>
            <div className='messageContent'>{message.content}</div>
          </div>
        ))}
      </div>
      <div className='separatorLine'></div>
      <div className='menuItem center'>Manage Messages</div>
    </div>
  );
}

export default MessagesDropDown;
