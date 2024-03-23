import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const Suggestion = ({ video }) => (
  <div className="suggestion-container">
    <Link to={`/stream/${video.id}`} className="suggestion-thumbnail-link">
      <div className="suggestion-thumbnail-container">
        <img src={video.thumbnailUrl} alt="Video Thumbnail" className="suggestion-thumbnail-img" />
      </div>
    </Link>
    <div className="suggestion-info">
      <div className='video-title'>{video.title}</div>
      <Link to={`/profile/${video.username}`} className="suggestion-creator-info">
        <span className="username">{video.username}</span>
      </Link>
      <div className='video-info'>
        <div className='views'>{video.views} views - </div>
        <div className="video-date">{video.date}</div>
     </div>
    </div>
  </div>  
);

Suggestion.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profilePicUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
  }).isRequired,
};

export default Suggestion;

