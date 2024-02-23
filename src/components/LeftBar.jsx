import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function LeftBar() {
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='item'>
            <AccountCircleIcon className='icon' />
            <span>UserName</span>
          </div>
          <div className='item'>
            <PeopleIcon className='icon' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <PeopleIcon className='icon' />
            <span>Co-creators</span>
          </div>
          <div className='item'>
            <VideoLibraryIcon className='icon' />
            <span>Gallery</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
