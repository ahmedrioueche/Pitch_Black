import React from 'react';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

function NewComment({ currentUser }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className='new new-comment'>
      <div className="header newPostHeader">
        <Avatar className="avatar" alt={currentUser.username} src={currentUser.profilePicUrl} />
        <span className="username">{currentUser.username}</span>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What do you think?"
            className="input-box"
            autoFocus
          />
          <IconButton className='iconBtn' type="submit" aria-label="send">
            <SendIcon className='icon sendIcon' />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default NewComment;
