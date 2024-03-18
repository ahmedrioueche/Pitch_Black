import React from 'react';
import { Link } from 'react-router-dom';

function UserDropDown() {
  return (
    <div className='dropdownMenu'>
        <div className='userInfo'>
            <img src='src/assets/userImg.webp' alt="user" className='profileImage' />
            <div className='profileInfo'>
                <div className='profileName'>John Doe</div>
                <div className='profileEmail'>john.doe@example.com</div>
            </div>
        </div>
        <div className='separatorLine'></div>
        <Link to='/profile' className='menuItem'>Your Profile</Link>
        <Link to='/' className='menuItem'>Your Projects</Link>
        <Link to='/' className='menuItem'>Your Gallery</Link>
        <div className='separatorLine'></div>
        <Link to='/studio' className='menuItem'>Pitch Studio</Link>
        <Link to='/stream' className='menuItem'>Pitch Stream</Link>
        <Link to='/' className='menuItem'>Pitch Library</Link>
        <div className='separatorLine'></div>
        <Link to='/' className='menuItem'>Settings</Link>
        <div className='separatorLine'></div>
        <Link to='/login' className='menuItem'>Log out</Link>
    </div>
  );
}

export default UserDropDown;
