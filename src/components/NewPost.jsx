import React from 'react'
import Avatar from '@mui/material/Avatar';

function NewPost({currentUser}) {
  return (
    <div className='create-post'>
        <div className="header">
            <Avatar alt={currentUser.username} src={currentUser.profilePicUrl} />
            <span className="username">{currentUser.username}</span>
        </div>
        <input type='text' placeholder='What do you think?'/>
        <div className='actions'>
            <div className='action-btn'>Done</div>
        </div>
    </div>
    )
}

export default NewPost