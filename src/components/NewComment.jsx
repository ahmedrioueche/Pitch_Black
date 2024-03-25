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
  };
  
  const [inputFocused, setInputFocused] = useState();
  const handleFocus = () => {
    setInputFocused(true);
  }

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
            className={`input-box ${inputFocused ? 'focused' : ''}`}
            placeholder="What do you think?"
            onChange={handleInputChange}
            onFocus={handleFocus} 
          />
          {inputFocused && (
            <IconButton className='iconBtn' type="submit" aria-label="send">
              <SendIcon className='icon sendIcon' />
            </IconButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewComment;
