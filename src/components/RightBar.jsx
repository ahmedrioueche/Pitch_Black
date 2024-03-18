import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';


function RightBar() {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='menu'>
          <Link to="/profile" className='menuItem profile-menuItem'>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </Link>
          <Link to="/studio" className='menuItem profile-menuItem'>
            <AddCircleOutlineSharpIcon className='icon'/>
            <span>Pitch Studio</span>
          </Link>
          <Link to="/stream" className='menuItem profile-menuItem'>
            <PlayCircleIcon className='icon'/>
            <span>Pitch Stream</span>
          </Link>
          <Link to="/" className='menuItem profile-menuItem'>
            <VideoLibraryIcon className='icon' />
            <span>Pitch Library</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
