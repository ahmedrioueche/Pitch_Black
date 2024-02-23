import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as RouterLink } from 'react-router-dom'; // Use Link from react-router-dom
import { animateScroll } from 'react-scroll';

function MyNavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
        <Nav.Link as={RouterLink} to="/">
          <Navbar.Brand onClick={() => animateScroll.scrollToTop()}>Pitch Black</Navbar.Brand>
        </Nav.Link>
          <span className="navbar-text studio">
            <Nav.Link as={RouterLink} to="/studio">
              <Button>
                <span>Pitch Studio</span>
              </Button>
            </Nav.Link>
          </span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={RouterLink}
                to="/"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={RouterLink}
                to="/profile"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Profile
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <Nav.Link as={RouterLink} to="/stream">
                <Button>
                  <span>Pitch Stream</span>
                </Button>
              </Nav.Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
