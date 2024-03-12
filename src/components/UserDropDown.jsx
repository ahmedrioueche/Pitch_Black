import React from 'react'

function UserDropDown() {
     
  return (
    <div className='userDropdownMenu'>
        <div className='userInfo'>
            <img src='src/assets/userImg.webp' alt="user" className='profileImage' />
            <div className='profileInfo'>
                <div className='profileName'>John Doe</div>
                <div className='profileEmail'>john.doe@example.com</div>
            </div>
        </div>
        <div className='separatorLine'></div>
        <div className='menuItem'>Your Profile</div>
        <div className='menuItem'>Your Projects</div>
        <div className='menuItem'>Your Gallery</div>
        <div className='separatorLine'></div>
        <div className='menuItem'>Pitch Studio</div>
        <div className='menuItem'>Pitch Stream</div>
        <div className='menuItem'>Pitch Library</div>
        <div className='separatorLine'></div>
        <div className='menuItem'>Settings</div>
        <div className='separatorLine'></div>
        <div className='menuItem'>Log out</div>
    </div>  )



}

export default UserDropDown