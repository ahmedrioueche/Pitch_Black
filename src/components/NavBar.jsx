import Button from 'react-bootstrap/Button';
import { useEffect, useState, useRef } from 'react';
import CloseDropDown from '../modules/CloseDropDown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import Person2Icon from '@mui/icons-material/Person2';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import UserDropDown from './UserDropDown';
import Messages from './MessagesDropDown';
import MessagesDropDown from './MessagesDropDown';
import NotificationsDropDown from './NotifsDropDown'


function MyNavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  const [isUserDropdownVisible, setIsUserDropDownVisible] = useState(false);
  const [isMessagesDropDownVisible, setIsMessagesDropDownVisible] = useState(false);
  const [isNotifsDropDownVisibles, setIsNotifsDropDownVisibles] = useState(false);

  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const messagesDropDownRef = useRef(null);
  const notifsDropDownRef = useRef(null);

  
  //----------------------------search bar------------------------------------//

  const toggleSearchBar = () => {
    
    setIsSearchBarVisible(!isSearchBarVisible);
    setIsSearchBarToggled(!isSearchBarToggled);
  };

  useEffect(() => {
    if(window.innerWidth < 920)
      setIsSearchBarVisible(false);


    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(()=> {
    setScreenWidth(window.innerWidth);
    if(screenWidth < 920 && !isSearchBarToggled )
      setIsSearchBarVisible(false);
    else if(screenWidth > 920){
      setIsSearchBarVisible(true);
      setIsSearchBarToggled(false);
      setIsUserDropDownVisible(false);
      setIsDropDownVisible(false);
      setIsMessagesDropDownVisible(false);
      setIsNotifsDropDownVisibles(false);
    }

  }, [window.innerWidth])


  //--------------------------DropDown------------------------------------//

  const toggleUserDropdown = () => {
    setIsUserDropDownVisible(!isUserDropdownVisible);
    setIsDropDownVisible(false);
    setIsNotifsDropDownVisibles(false);
    setIsMessagesDropDownVisible(false);

  };

  const toggleDropdown = () => {
    setIsDropDownVisible(!isDropdownVisible);
    setIsUserDropDownVisible(false);
    setIsNotifsDropDownVisibles(false);
    setIsMessagesDropDownVisible(false);

  };

  const toggleMessagesDropDown = () => {
    setIsMessagesDropDownVisible(!isMessagesDropDownVisible);
    setIsNotifsDropDownVisibles(false);
    setIsDropDownVisible(false);
    setIsUserDropDownVisible(false);
    console.log("messages")
  }

  const toggleNotifsDropDown = () => {
    setIsNotifsDropDownVisibles(!isNotifsDropDownVisibles)
    setIsMessagesDropDownVisible(false);
    setIsDropDownVisible(false);
    setIsUserDropDownVisible(false);
  }

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropDownVisible(false);
    }
    if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
      setIsUserDropDownVisible(false);
    }
    if (messagesDropDownRef.current && !messagesDropDownRef.current.contains(e.target)) {
      setIsMessagesDropDownVisible(false);
    }
    if (notifsDropDownRef.current && !notifsDropDownRef.current.contains(e.target)) {
      setIsNotifsDropDownVisibles(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);


  //--------------------------Scroll----------------------------------//
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  //-------------------------------------------------------//

  function handleCollapse(){}


  return (
    <>
      <div className='navbar'>
      {(window.innerWidth >= 500 || !isSearchBarVisible) && (
        <div className='navleft'>
          <Link to="/">
            <span>Pitch Black</span>
          </Link>
        </div>
      )}
        {(isSearchBarVisible || window.innerWidth >= 920) && (       
          <div className='navsearch'>
            {isSearchBarVisible && isSearchBarToggled? (
              <>
                <ArrowBackSharpIcon className='leftIcon' onClick={toggleSearchBar}/>
                <form>
                  <SearchIcon className="searchIcon" />
                  <input className="search-box" type="text" placeholder='Search' />
                  <button className='btn'>Search</button>
                </form>
              </> 
            ) : ( //isSearchBarVisible == false, isSearchBarToggled == false
              <>
                <form> 
                  <SearchIcon className="searchIcon" />
                  <input className="search-box" type="text" placeholder='Search' />
                  <button className='btn'>Search</button>
                </form>
              </>
            )}
          </div>
        )}
        
        <div className='navright'>
        {(!isSearchBarToggled && window.innerWidth >= 650) ? (
          <>
            <SearchIcon className='rightIcon searchIcon' onClick={toggleSearchBar} />
            <Link to="/stream">
              <PlayCircleIcon className='rightIcon link'/>
            </Link>
            <Link to="/">
             <AddCircleOutlineSharpIcon className='rightIcon link' />
            </Link>
            <CircleNotificationsIcon className="rightIcon" ref={notifsDropDownRef} onClick={toggleNotifsDropDown} />
               {isNotifsDropDownVisibles && (
                <NotificationsDropDown/>
               )}
            <MessageIcon className="rightIcon" ref={messagesDropDownRef} onClick={toggleMessagesDropDown}/>
               {isMessagesDropDownVisible && (
                <MessagesDropDown/>
               )}
    
            <div className='user' onClick={toggleUserDropdown} ref={userDropdownRef}>
              <img src='src/assets/userImg.webp' />
              {isUserDropdownVisible && ( 
               <UserDropDown/>
              )}
            </div>
          </>
        ) : (
          (!isSearchBarVisible && (
            <>
              <MoreVertIcon className='collapseIcon' onClick={toggleDropdown} ref={dropdownRef} />
              {(isDropdownVisible && !isUserDropdownVisible) && (
                <div className='dropdownMenu'>
                  <div className='userInfo' onClick={toggleUserDropdown}>
                    <img src='src/assets/userImg.webp' alt="user" className='profileImage' />
                    <div className='profileInfo'>
                      <div className='profileName'>John Doe</div>
                      <div className='profileEmail'>john.doe@example.com</div>
                    </div>
                  </div>
                  <div className='separatorLine'></div>
                  <div className='menuItem' onClick={toggleMessagesDropDown}>
                    <MessageIcon className="rightIcon drop" />
                    Messages
                  </div>
                  <div className='menuItem' onClick={toggleNotifsDropDown}>
                    <CircleNotificationsIcon className="rightIcon drop" />
                    Notifications
                  </div>
                  <div className='separatorLine'></div>
                  <div className='menuItem'>
                    <AddCircleOutlineSharpIcon className='rightIcon drop' />
                    Create
                  </div>
                  <div className='menuItem'>
                    <PlayCircleIcon className='rightIcon drop' />
                    Watch
                  </div>
                  <div className='separatorLine'></div>
                  <div className='menuItem' onClick={toggleSearchBar}>
                    <SearchIcon className='rightIcon searchIcon drop' />
                    Search
                  </div>
                </div>
              )}
              {isUserDropdownVisible && (
                <UserDropDown />
              )}
              {isMessagesDropDownVisible && (
                <MessagesDropDown/>
              )}
              
              {isNotifsDropDownVisibles && (
                <NotificationsDropDown/>
               )}
            </>
          ))
        )}
      </div>
     </div>
    </>
  );
}

export default MyNavBar;
