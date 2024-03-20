// Reply.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import NewPost from './NewPost';
import NewComment from './NewComment';

const Reply = ({currentUser, username, profilePicUrl, content, likes }) => {
  const [liked, setLiked] = useState(false);
  const [replyOpened, setreplyOpened] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };

  const handleReply = () => {
    setreplyOpened(!replyOpened);
    };


  return (
    <div className="reply">
      <div className="header reply-header">
        <Avatar className="avatar" alt={username} src={profilePicUrl} />
        <span className="username">{username}</span>
      </div>
      <div className="reply-content">{content}</div>
      <div className="actions">
        <IconButton onClick={handleLiked} className="action-button">
          <ThumbUpIcon className={`icon ${liked ? 'action-active' : ''}`} />
          <span className={`action-count ${liked ? 'action-active' : ''}`}>{likes}</span>
        </IconButton>
        <IconButton 
          className="action-button">
          <div className={`action-btn reply-btn ${liked ? 'action-active' : ''}`} onClick={handleReply}>Reply</div>
        </IconButton>
      </div>
      {replyOpened && (
        <>
          <NewComment currentUser={currentUser}/>
        </>
      )}
    </div>
  );
};

Reply.propTypes = {
  username: PropTypes.string.isRequired,
  profilePicUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Reply;
