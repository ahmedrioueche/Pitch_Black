import React from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { Avatar } from '@mui/material';
import VideoSuggestions from './VideoSuggestions';
import CommentSection from '../../components/CommentSection'
import './stream.css'

const StreamPage = ({  }) => {
  const { id } = useParams();
  const currentUser = {
    username: 'JohnDoe',
    profilePicUrl: 'src/assets/userImg.webp',
  };

  const video = {
    id: 'H1XxUZAOT34',
    title: 'The Air Marshal, Liam Neeson',
    thumbnailUrl: 'src/assets/thumb1.jpg',
    username: 'John Doe',
    profilePicUrl: 'src/assets/userImg.webp',
    date: '2024-03-15',
    views: '1.254.365',
    videoUrl: 'https://youtu.be/H1XxUZAOT34',
  };

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
    <div className="stream-page">
      <div className="left-section">
        <div className="video-player-container">
          <VideoPlayer videoId={id} />
          <div className="video-title">{video.title}</div>
          <Link to={`/profile/${video.username}`} className="creator-info">
            <Avatar className="stream avatar" alt={video.username} src={video.profilePicUrl} />
            <span className="stream username">{video.username}</span>
          </Link>
          <div className="video-info">
            <div className="views">{video.views} views</div>
            <div className="stream-date video-date">Uploaded on {video.date}</div>
          </div>
        </div>
        <div className="comment-section">
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
           </div>
      </div>
      <div className="right-section">
        <VideoSuggestions />
      </div>
    </div>
  );
};

export default StreamPage;
