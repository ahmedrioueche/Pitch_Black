  import React from 'react';
  import PropTypes from 'prop-types';
  import { Link } from 'react-router-dom';
  import { Avatar } from '@mui/material';
  import './stream.css'
  const VideoThumbnail = ({ video }) => (
    <div className="video-thumbnail">
      <Link to={`/stream/${video.id}`} className="thumbnail-link">
        <img src={video.thumbnailUrl} alt="Video Thumbnail" className="thumbnail-img" />
      </Link>
      <div className="video-info-header">
        <Link to={`/profile/${video.username}`} className="creator-info">
          <Avatar className="stream avatar" alt={video.username} src={video.profilePicUrl} />
        </Link>
        <div className='video-meta-data'>
          <Link to={`/stream/${video.id}`} className='title-link'>
            <div className='video-title'>{video.title}</div>
          </Link>
          <Link to={`/profile/${video.username}`}  className='username-link'>
            <span className="stream username">{video.username}</span>
          </Link>
          <div className='video-info'>
            <div className='views'>{video.views} views -</div>
            <div className="video-date">{video.date}</div>
         </div>
        </div>
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
      views: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default VideoThumbnail;
