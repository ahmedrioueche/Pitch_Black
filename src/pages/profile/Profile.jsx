import React from 'react';
import Avatar from '@mui/material/Avatar';
import PostCard from '../../components/PostCard';
import { useState } from 'react';
import RightBar from "../../components/RightBar"

const Profile = ({ currentUser }) => {
  const [postsSelected, setPostsSelected] = useState(true);

  const handlePostClick = () => {
    setPostsSelected(!postsSelected);
    console.log("postsSelected", postsSelected)
  }

  const user = {
      username: "JohnDoe",
      profilePicUrl: "src/assets/userImg.webp",
    };

  const posts = [
    {
      username: "JohnDoe",
      profilePicUrl: "src/assets/userImg.webp",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero in tellus hendrerit aliquam. Nulla facilisi. Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat. Vivamus eu arcu vel tellus laoreet tristique ac vel velit. Integer efficitur tincidunt ligula vel consequat. Curabitur ut justo vel libero blandit fermentum id at augue. In in hendrerit libero, eget volutpat odio.",
      likes: 42,
      comments: 15,
      shares: 8,
    },

    {
      username: "JohnDoe",
      profilePicUrl: "src/assets/userImg.webp",
      content: "This is a sample post content.",
      likes: 12,
      comments: 9,
      shares: 2,
    }
  ];

  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-header">
        <img className="userImg" alt={user.username} src={user.profilePicUrl} />
        <span className="username">{user.username}</span>
      </div>
      <div className="profile-body">
        <div className="profile-link" onClick={handlePostClick}>Posts</div>     
        <div className="profile-link">Projects</div>
        <div className="profile-link">Published Projects</div>
        <div className="profile-link">Library</div>
      </div>
      {postsSelected && (
          <>
            {posts.map((post, index) => (
            <PostCard
              key={index}
              currentUser={currentUser}
              post={post}
          />
        ))}
          </>
      )}
      </div>
      <RightBar />
    </div>
  );
};

export default Profile;
