import Button from 'react-bootstrap/Button';
import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
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


function MyNavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
    console.log('isSearchBarVisible',isSearchBarVisible )
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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

  useEffect(()=> {
    setScreenWidth(window.innerWidth);
    /*if(screenWidth > 920)
      setIsSearchBarVisible(false);*/
  }, [window.innerWidth])


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const closeDropdown = (e) => {
    console.log("dropdownRef", dropdownRef)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownVisible(false);
    }
  };
  useEffect(() => {
    // Attach event listener when the component mounts
    document.addEventListener('click', closeDropdown);

    // Detach event listener when the component unmounts
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  function handleCollapse(){}


  return (
    <>
      <div className='navbar'>
        <div className='navleft'>
          <Link to="/">
            <span>Pitch Black</span>
          </Link>
        </div>
        {(isSearchBarVisible || window.innerWidth >= 920) && (       
          <div className='navsearch'>
            {isSearchBarVisible? (
              <>
               <ArrowBackSharpIcon className='leftIcon'/>
                <form>
                  <SearchIcon className="searchIcon" />
                  <input type="text" placeholder='Search' />
                  <button className='btn'>Search</button>
                </form>
              </>
                 
            ) : (
               <>
            
                 <form>
                  <SearchIcon className="searchIcon" />
                  <input type="text" placeholder='Search' />
                  <button className='btn'>Search</button>
                </form>
              </>
            )}
          </div>
        )}
        
        <div className='navright'>
         {(!isSearchBarVisible ||  window.innerWidth >= 700)  ? (
          <>
            <SearchIcon className='rightIcon searchIcon' onClick={toggleSearchBar} />
            <PlayCircleIcon className='rightIcon' />
            <AddCircleOutlineSharpIcon className='rightIcon' />
            <CircleNotificationsIcon className="rightIcon" />
            <MessageIcon className="rightIcon" />
            <div className='user' onClick={toggleDropdown} ref={dropdownRef}>
              <img src='src/assets/userImg.webp' />
              {isDropdownVisible && (
                  <div className='dropdownMenu'>
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
                  <div className='menuItem'>Your Galery</div>
                  <div className='separatorLine'></div>
                  <div className='menuItem'>Pitch Studio</div>
                  <div className='menuItem'>Pitch Stream</div>
                  <div className='menuItem'>Pitch Library</div>
                  <div className='separatorLine'></div>
                  <div className='menuItem'>Settings</div>
                  <div className='separatorLine'></div>
                  <div className='menuItem'>Log out</div>

                </div>
                )}  
            </div>
          </>
            ) : (
              <>
                <MoreVertIcon className='collapseIcon' />
             </>
          )}
        </div>

      </div>
    </>
  );
  
}

export default MyNavBar;
