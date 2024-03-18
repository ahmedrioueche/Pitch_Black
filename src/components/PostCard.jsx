import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import CommentSection from './CommentSection';
import { Link } from 'react-router-dom';

const PostCard = ({ currentUser, username, profilePicUrl, content, likes, comments, shares }) => {

    const [liked, setLiked] = useState(false);
    const [commentsOpened, setcommentsOpened] = useState(false);
    const [shareClicked, setshareClicked] = useState(false);

    const handleLiked = () => {
        setLiked(!liked);
    };
    const handlecommentsOpen = () => {
        setcommentsOpened(!commentsOpened);
    };
    const handleshareClick = () => {
        setshareClicked(!shareClicked);
    };

    const handleUsernameClick = (username) => {
      //go to user profile
      <Navigate to="/profile" />
    }

    const placeholderReplies = [
      {
        username: 'JohnDoe',
        profilePicUrl: "src/assets/userImg.webp",
        content: ' Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet.',
        likes: 4,
      },
      {
        username: 'JeenDoe',
        profilePicUrl: "src/assets/userImg.webp",
        content: 'Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat.',
        likes: 3,
      },

    ];


  return (
    <div className="post-card">
      <Link to="/profile" className="header postHeader">
        <Avatar className="avatar" alt={currentUser.username} src={currentUser.profilePicUrl} />
        <span className="username">{currentUser.username}</span>
      </Link>
      <div className="post-content">{content}</div>
      <div className="actions">
        <IconButton 
          onClick={handleLiked}
          className = 'action-button'>
          <ThumbUpIcon className={`icon ${liked ? 'action-active' : ''}`} />
          <span className={`action-count ${liked ? 'action-active' : ''}`}>{likes}</span>
        </IconButton>
        <IconButton 
          onClick={handlecommentsOpen}
          className="action-button">
          <CommentIcon className={`icon ${commentsOpened ? 'action-active' : ''}`}  />
          <span className={`action-count ${commentsOpened ? 'action-active' : ''}`}>{comments}</span>
        </IconButton>
        <IconButton 
          className="action-button"
          onClick={handleshareClick}>
          <ShareIcon className={`icon ${shareClicked ? 'action-active' : ''}`} />
          <span className={`action-count ${shareClicked ? 'action-active' : ''}`}>{shares}</span>
        </IconButton>
      </div>
      {commentsOpened && (
        <>
            <CommentSection
              currentUser={currentUser}
              comments={[
                  {
                  username: 'Pussy',
                  profilePicUrl: 'src/assets/cat.webp',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero in tellus hendrerit aliquam. Nulla facilisi. Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat.',
                  likes: '27',
                  replies: placeholderReplies  ,
                  },
                  {
                  username: 'Doggo',
                  profilePicUrl: 'src/assets/dog.jpg',
                  content: 'Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat. Vivamus eu arcu vel tellus laoreet',
                  likes: '17',
                  replies: placeholderReplies  ,
                  },
              ]}
           />
        </>
      )}
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
