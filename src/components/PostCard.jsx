import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const PostCard = ({ username, profilePicUrl, content, likes, comments, shares }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <Avatar alt={username} src={profilePicUrl} />
        <span className="username">{username}</span>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        <IconButton>
          <ThumbUpIcon />
          {likes}
        </IconButton>
        <IconButton>
          <CommentIcon />
          {comments}
        </IconButton>
        <IconButton>
          <ShareIcon />
          {shares}
        </IconButton>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  username: PropTypes.string.isRequired,
  profilePicUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
};

export default PostCard;
