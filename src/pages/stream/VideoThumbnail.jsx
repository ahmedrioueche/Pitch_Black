import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const VideoThumbnail = ({ video }) => (
  <div className="video-thumbnail">
    <Link to={`/video/${video.id}`} className="thumbnail-link">
      <img src={video.thumbnailUrl} alt="Video Thumbnail" className="thumbnail-img" />
    </Link>
      <div className="creator-info">
        <Avatar className="stream avatar" alt={video.username} src={video.profilePicUrl} />
        <span className="username">{video.username}</span>
      </div>
      <div className='video-info'>
        <div className='views'>{video.views} views</div>
        <div className="video-date">{video.date}</div>
     </div>
  </div>
);

VideoThumbnail.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profilePicUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoThumbnail;
