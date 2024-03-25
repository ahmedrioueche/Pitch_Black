import React from 'react';
import { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import CommentSection from './CommentSection';
import { Link } from 'react-router-dom';
import ShareWindow from './ShareWindow';

const PostCard = ({currentUser, post}) => {

    const [liked, setLiked] = useState(false);
    const [commentsOpened, setcommentsOpened] = useState(false);
    const [shareWindowOpened, setshareWindowOpened] = useState(false);
    const shareWindowRef = useRef(null);

    const handleLiked = () => {
        setLiked(!liked);
    };
    const handlecommentsOpen = () => {
        setcommentsOpened(!commentsOpened);
    };
    const handleshareClick = () => {
      setshareWindowOpened(!shareWindowOpened);
    };
    const handleShareWindowClose = () => {
      setshareWindowOpened(false);
      console.log("close")
    };

    const placeholderReplies = [
      {
        username: 'JohnDoe',
        profilePicUrl: "src/assets/userImg.webp",
        content: ' Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet.',
        likes: 4,
        date: "2024-03-25T00:00:00", 
      },
      {
        username: 'JeenDoe',
        profilePicUrl: "src/assets/userImg.webp",
        content: 'Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat.',
        likes: 3,
        date: "2024-03-24T00:00:00", 
      },

    ];
    
  return (
    <div className="post-card">
      <Link to="/profile" className="header postHeader">
        <Avatar className="avatar" alt={post.username} src={post.profilePicUrl} />
        <span className="username">{post.username}</span>
      </Link>
      <div className="post-content">{post.content}</div>
      <div className="actions">
        <IconButton 
          onClick={handleLiked}
          className = 'action-button'>
          <ThumbUpIcon className={`icon ${liked ? 'action-active' : ''}`} />
          <span className={`action-count ${liked ? 'action-active' : ''}`}>{post.likes}</span>
        </IconButton>
        <IconButton 
          onClick={handlecommentsOpen}
          className="action-button">
          <CommentIcon className={`icon ${commentsOpened ? 'action-active' : ''}`}  />
          <span className={`action-count ${commentsOpened ? 'action-active' : ''}`}>{post.comments}</span>
        </IconButton>
        <IconButton 
          className="action-button"
          onClick={handleshareClick}>
          <ShareIcon className={`icon ${shareWindowOpened ? 'action-active' : ''}`} />
          <span className={`action-count ${shareWindowOpened ? 'action-active' : ''}`}>{post.shares}</span>
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
                  date: "2024-03-24T00:00:00", 
                  replies: placeholderReplies  ,
                  },
                  {
                  username: 'Doggo',
                  profilePicUrl: 'src/assets/dog.jpg',
                  content: 'Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat. Vivamus eu arcu vel tellus laoreet',
                  likes: '17',
                  date: "2024-03-25T00:00:00", 
                  replies: placeholderReplies  ,
                  },
              ]}
           />
        </>
      )}
      {shareWindowOpened && (
        <>
         <ShareWindow 
         currentUser={currentUser} 
         post={post} 
         onClose={handleShareWindowClose}/>
        </>
      )}
    </div>
  );
};

export default PostCard;
