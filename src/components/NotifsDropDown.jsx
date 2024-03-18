import React, { useEffect, useRef } from 'react';
import CloseDropDown from '../modules/CloseDropDown';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

function NotificationsDropDown() {

  const profilePicUrl = 'src/assets/userImg.webp';
  const notifications = [
    { id: 1, sender: 'Doggo', profilePic: 'src/assets/dog.jpg', time: '1 hour ago', content: 'Liked your post' },
    { id: 2, sender: 'Pussy', profilePic: 'src/assets/cat.webp',  time: '2 hours ago', content: 'Commented on your post' },
  ];

  const handleItemClick = (notification) => {
    setIsNotificationsDropDownVisible(false);
  };

  return (
    <div className='dropdownMenu' >
      <div className='userInfo'>
        <img src={profilePicUrl} alt="user" className='profileImage' />
        <div className='profileInfo'>
          <div className='profileName'>John Doe</div>
          <div className='profileEmail'>john.doe@example.com</div>
        </div>
      </div>
      <div className='separatorLine'></div>
      <span className='dropDownTitle'>Notifications</span>
      <div className='separatorLine'></div>

      <div className='notificationsContainer'>
        {notifications.map((notification) => (
          <div key={notification.id} className='menuItem notifs' onClick={() => handleItemClick(notification)}>
            <div className='profileName'>
              <img src={notification.profilePic || profilePicUrl} alt="" className='profileImage' />
              {notification.sender}
            </div>
            <div className='notificationContent'>{notification.sender + " " +  notification.content}</div>
            <span className='notificationContent time'>{notification.time}</span>
          </div>
        ))}
      </div>
      <div className='separatorLine'></div>
      <div className='menuItem center'>View All Notifications</div>
    </div>
  );
}

export default NotificationsDropDown;
