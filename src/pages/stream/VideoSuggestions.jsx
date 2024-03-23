import React from 'react';
import Suggestion from './Suggestion';
import thumb1 from '../../assets/thumb1.jpg';
import thumb2 from '../../assets/thumb2.jpg';
import thumb3 from '../../assets/thumb3.jpg';
import thumb4 from '../../assets/thumb4.jpg';
import thumb6 from '../../assets/thumb6.jpg';
import thumb8 from '../../assets/thumb8.webp';
import userImg from '../../assets/userImg.webp';
import dog from '../../assets/dog.jpg';
import pussy from '../../assets/cat.webp';

const VideoSuggestions = () => {
  const videos = [
    {
      id: 1,
      title: 'The Air Marchal with the weird accent, Liam Neeson',
      thumbnailUrl: thumb1,
      username: 'John Doe',
      profilePicUrl: userImg,
      date: '5 days ago',
      views: "1.2M"
    },
    {
      id: 2,
      title: 'kung-fu Panda 4: Po goes to America',
      thumbnailUrl: thumb2,
      username: 'Pussy',
      profilePicUrl: pussy,
      date: '3 days ago',
      views: "782K"
    },
    {
      id: 3,
      title: 'Apocalypse: the world got to doom and everyone turned into zombies',
      thumbnailUrl: thumb3,
      username: 'Pussy',
      profilePicUrl: pussy,
      date: '1 week ago',
      views: "623K"
    },
    {
      id: 4,
      title: 'The hacker',
      thumbnailUrl: thumb4,
      username: 'John Doe',
      profilePicUrl: userImg,
      date: '12 days ago',
      views: "234K"
    },
    {
      id: 5,
      title: 'Killers of the flower moon',
      thumbnailUrl: thumb8,
      username: 'Pussy',
      profilePicUrl: pussy,
      date: '1 month ago',
      views: "945K"
    },
    {
      id: 6,
      title: 'Fautline - full movie',
      thumbnailUrl: thumb6,
      username: 'Doggo',
      profilePicUrl: dog,
      date: '3 months ago',
      views: "567K"
    },
  ];

  return (
    <div className="video-suggestions">
      {videos.map((video, index) => (
        <div key={index} className="video-suggestion">
         <Suggestion video={video}/>
        </div>
      ))}
    </div>
  );
};

export default VideoSuggestions;
