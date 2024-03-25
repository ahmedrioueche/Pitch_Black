import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import VideoPlayer from './VideoPlayer';
import { Avatar } from '@mui/material';
import VideoSuggestions from './VideoSuggestions';
import CommentSection from '../../components/CommentSection';
import userImg from '../../assets/userImg.webp';
import './stream.css';
import DescriptionBox from '../../components/DescriptionBox';
import ReorderIcon from '@mui/icons-material/Reorder';

const StreamPage = ({}) => {
  const { id } = useParams();
  const currentUser = {
    username: 'John Doe',
    profilePicUrl: userImg
  };

  const video = {
    id: 'H1XxUZAOT34',
    title: 'The Air Marshal, Liam Neeson',
    thumbnailUrl: 'src/assets/thumb1.jpg',
    username: 'John Doe',
    profilePicUrl: userImg,
    date: "2024-03-23T00:00:00", 
    views: '1.254.365',
    description: "This is some nice shit, please follow for more nice shit. I have always dreamed of creating nice shit, and now i'm acheiving my dreams thanks to Pitch Black. From the river to the sea Palastine will be free, From the river to the sea Palastine will be free, From the river to the sea Palastine will be free, This is some nice shit, please follow for more nice shit. I have always dreamed of creating nice shit, and now i'm acheiving my dreams thanks to Pitch Black. From the river to the sea Palastine will be free, From the river to the sea Palastine will be free, From the river to the,This is some nice shit, please follow for more nice shit. I have always dreamed of creating nice shit, and now i'm acheiving my dreams thanks to Pitch Black. From the river to the sea Palastine will be free, From the river to the sea Palastine will be free",
    videoUrl: 'https://youtu.be/H1XxUZAOT34',
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
      date: "2024-03-25T00:00:00", 
    },
  ];

  const comments = [
    {
      username: 'Pussy',
      profilePicUrl: 'src/assets/cat.webp',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero in tellus hendrerit aliquam. Nulla facilisi. Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat.',
      likes: '27',
      date: "2024-03-24T00:00:00", 
      relativeDate: "",
      replies: placeholderReplies,
    },
    {
      username: 'Doggo',
      profilePicUrl: 'src/assets/dog.jpg',
      content: 'Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat. Vivamus eu arcu vel tellus laoreet',
      likes: '17',
      date: "2024-03-25T00:00:00", 
      relativeDate: "",
      replies: placeholderReplies,
    },
  ];
  useEffect(()=>{
    getRelativedate();
  }, [])
  
  const [relativeDate,setRelativeDate] = useState(null);
  const getRelativedate = () => {
      const uploadDate = new Date(video.date);
      setRelativeDate(formatDistanceToNow(uploadDate, { addSuffix: true }));
  }

  const [isSortOpened, setIsSortOpened] = useState(false);
  const [commentsOrder, setCommentsOrder] = useState("most_popular");
  const sortRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpened(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSortBy = () => {
    setIsSortOpened(!isSortOpened);
  };

  const handleSortOptionClick = (option) => {
    setIsSortOpened(!isSortOpened);
    handleCommentsOrderChange(option);
  };

  const [sortedComments, setSortedComments] = useState(comments);
  const handleCommentsOrderChange = (option) => {
    if(option == "most_popular")
      setSortedComments(comments.slice().sort((a, b) => b.likes - a.likes));
    else if(option == "newest" )
      setSortedComments(comments.slice().sort((a, b) => b.date - a.date));

    console.log(sortedComments)
    setCommentsOrder(option);
  };

  return (
    <div className="stream-page">
      <div className="left-section">
        <div className="video-player-container">
          <VideoPlayer videoId={id} />
          <div className="video-title">{video.title}</div>
          <div className="stream-creator-info">
            <Link to={`/profile/${video.username}`}>
              <Avatar className="stream avatar" alt={video.username} src={video.profilePicUrl} />
            </Link>
            <div className='details'>
              <span className="stream username">
                <Link to={`/profile/${video.username}`} className="username-link">{video.username}</Link>
              </span>
              <span className='followers'>1M followers</span>
            </div>
            <button className='btn follow-btn'>Follow</button>
          </div>
          <div className="video-info">
            <div className="views">{video.views} views</div>
            <div className="stream-date video-date">Uploaded {relativeDate}</div>
          </div>
          <DescriptionBox description={video.description} />
        </div>
        <div className='stream-comments-header'>
          <div className='comments-data'>{comments.length} Comments</div>
          <div className='sort-by' onClick={handleSortBy}>
            <ReorderIcon className='icon list-icon' />
            <div className='stream-sort-btn'>Sort by</div>
          </div>
          {isSortOpened && (
            <div className="sort-dropdown" ref={sortRef}>
              <div onClick={() => handleSortOptionClick('most_popular')}>Most Popular</div>
              <div onClick={() => handleSortOptionClick('newest')}>Newest</div>
            </div>
          )}
        </div>
        <div className="comment-section">
          <CommentSection
            currentUser={currentUser}
            comments={sortedComments}
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
