// Comment.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import Reply from './Reply'
import NewPost from './NewPost';
import NewComment from './NewComment';

const Comment = ({currentUser, username, profilePicUrl, content, likes, replies }) => {
    const [liked, setLiked] = useState(false);
    const [commentsOpened, setcommentsOpened] = useState(false);

    const handleLiked = () => {
        setLiked(!liked);
    };
    const handlecommentsOpened = () => {
        setcommentsOpened(!commentsOpened);
    };
   
  return (
    <div className="comment">
     <div className="header">
        <Avatar className="avatar" alt={username} src={profilePicUrl} />
        <span className="username">{username}</span>
      </div>
      <div className="comment-content">{content}</div>
        <div className="actions comment-actions">
        <IconButton 
          onClick={handleLiked}
          className = 'action-button'>
          <ThumbUpIcon className={`icon ${liked ? 'action-active' : ''}`} />
          <span className={`action-count ${liked ? 'action-active' : ''}`}>{likes}</span>
        </IconButton>
        <IconButton     
          onClick={handlecommentsOpened}
          className="action-button">
          <CommentIcon className={`icon ${commentsOpened ? 'action-active' : ''}`}  />
          <span className={`action-count ${commentsOpened ? 'action-active' : ''}`}>{replies.length}</span>
        </IconButton>
      </div>
      <div className='replies'>
        {commentsOpened && (
          <>
           <NewComment currentUser={currentUser} />
           <div>
            {replies.map((reply, index) => (
                <Reply key={index} {...reply} currentUser={currentUser} />
            ))}
            </div>
          </>      
        )}
      </div>
    </div>
  );
  
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  profilePicUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Comment;
