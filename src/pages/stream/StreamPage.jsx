    import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import VideoPlayer from './VideoPlayer'; // Assuming you have a VideoPlayer component
    import { Avatar } from '@mui/material';
    const StreamPage = () => {
    // Access the video ID from the URL params
    const { id } = useParams();
    const video = {
            id: 'H1XxUZAOT34',
            title: 'The Air Marchal, Liam Neeson',
            thumbnailUrl: 'src/assets/thumb1.jpg',
            username: 'John Doe',
            profilePicUrl: 'src/assets/userImg.webp',
            date: '2024-03-15',
            views: "1.254.365",
            videoUrl: "https://youtu.be/H1XxUZAOT34",
    }
    return (
        <div className="stream-page">
        <div className="video-player-container">
            <VideoPlayer videoId={id} />
        </div>
        <Link to={`/profile/${video.username}`} className="creator-info">
            <Avatar className="stream avatar" alt={video.username} src={video.profilePicUrl} />
            <span className="username videoUsername">{video.username}</span>
        </Link>
        <div className='video-info'>
            <div className='views'>{video.views} views</div>
            <div className="video-date">{video.date}</div>
        </div>
        </div>
    );
    };

    export default StreamPage;
