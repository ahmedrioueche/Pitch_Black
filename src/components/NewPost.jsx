import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function NewPost({ currentUser }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputHeight = (event) => {
    const target = event.target;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='new new-post'>
      <Link to="/profile" className="header newPostHeader">
        <Avatar className="avatar" alt={currentUser.username} src={currentUser.profilePicUrl} />
        <span className="username">{currentUser.username}</span>
      </Link>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputHeight}
          placeholder="What are you thinking?"
          className="input-box"
          autoFocus
        />
        <div className='actions'>
          <IconButton className='iconBtn' type="submit" aria-label="send">
            <SendIcon className='sendIcon icon' />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
