import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const ShareWindow = ({ currentUser, post, onClose }) => {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleShare = () => {
   
  };

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

  const handleClick = () => {
    console.log("close from sharewindow")
  }

  return (
    <div className="share-window">
      <div className="share-header">
        <div className="header postHeader">
            <Avatar className="avatar" alt={currentUser.username} src={currentUser.profilePicUrl} />
            <span className="username share">{currentUser.username}</span>
        </div>  
        <div onClick={onClose}>
         <HighlightOffIcon className='icon closeIcon' />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputHeight}
          placeholder="What are you thinking?"
          className="input-box"
          autoFocus
        />
      </form>
      <div className='share-post-container'>
        <div className="header postHeader">
            <Avatar className="avatar" alt={post.username} src={post.profilePicUrl} />
            <span className="username">{post.username}</span>
        </div>
        <div className="post-content">{post.content}</div>
      </div>
    
      <div className='share-container'>
         <button onClick={handleShare} className='btn share-btn'>Share</button>
      </div>
    </div>
  );
};  

ShareWindow.propTypes = {
  post: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ShareWindow;
