import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function RightBar() {
  return (
    <div className='rightBar leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='menuItem'>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </div>
          <div className='menuItem'>
            <PeopleIcon className='icon' />
            <span>Community</span>
          </div>
          <div className='menuItem'>
            <VideoLibraryIcon className='icon' />
            <span>Library</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
