import React from 'react';

const VideoPlayer = ({ videoId }) => {
  // Construct the YouTube embed URL using the videoId
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-player">
      {/* Embed the YouTube video */}
      <iframe
        title="YouTube Video Player"
        width="100%"
        height="400"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
