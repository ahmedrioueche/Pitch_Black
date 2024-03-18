import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function LeftBar({ user }) {
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <Link to="/profile" className='menuItem profile-menuItem'>
            <Avatar className='avatar leftbar-avatar' src={user.profilePicUrl}/>
            <span>{user.username}</span>
          </Link>
          <Link className='menuItem profile-menuItem'>
            <VideoLibraryIcon className='icon' />
            <span>Projects</span>
          </Link>
          <Link to="/" className='menuItem profile-menuItem'>
            <PeopleIcon className='icon'/>
            <span>Friends</span>
          </Link>
          <Link to="/" className='menuItem profile-menuItem'>
            <PeopleIcon className='icon' />
            <span>Co-creators</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
