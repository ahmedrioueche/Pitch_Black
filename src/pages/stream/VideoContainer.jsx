import React from 'react';
import VideoThumbnail from './VideoThumbnail';

const VideoContainer = () => {
    const videos = [
      {
        id: 1,
        thumbnailUrl: 'src/assets/thumb1.jpg',
        username: 'John Doe',
        profilePicUrl: 'src/assets/userImg.webp',
        date: '2024-03-15',
        views: "1.254.365"
      },
      {
        id: 2,
        thumbnailUrl: 'src/assets/thumb2.jpg',
        username: 'Pussy',
        profilePicUrl: 'src/assets/cat.webp',
        date: '2024-03-14',
        views: "782.904"
      },
      {
        id: 3,
        thumbnailUrl: 'src/assets/thumb3.jpg',
        username: 'Pussy',
        profilePicUrl: 'src/assets/cat.webp',
        date: '2024-03-14',
        views: "623.409"
      },
      {
        id: 4,
        thumbnailUrl: 'src/assets/thumb4.jpg',
        username: 'John Doe',
        profilePicUrl: 'src/assets/userImg.webp',
        date: '2024-03-15',
        views: "234.567"
      },
      {
        id: 5,
        thumbnailUrl: 'src/assets/thumb8.webp',
        username: 'Pussy',
        profilePicUrl: 'src/assets/cat.webp',
        date: '2024-03-14',
        views: "945.678"
      },
      {
        id: 6,
        thumbnailUrl: 'src/assets/thumb6.jpg',
        username: 'Doggo',
        profilePicUrl: 'src/assets/dog.jpg',
        date: '2024-03-14',
        views: "567.890"
      },
    ];

  return (
    <div className="video-container">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <VideoThumbnail video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
