import './App.css'
import { useState } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, 
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate, 
  useParams,
} from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import MyNavBar from './components/NavBar'
import Profile from './pages/profile/Profile';
import Studio from './pages/studio/Studio'
import Stream from './pages/stream/Stream'
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: 'JohnDoe',
    profilePicUrl: 'src/assets/userImg.webp',
  });

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile', element: <Profile currentUser={currentUser} /> },
        { path: '/studio', element: <Studio /> },
        { path: '/stream', element: <Stream /> },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <MyNavBar />
        <div style={{ display: 'flex' }}>
          <div>
            <LeftBar user={currentUser} />
          </div>
          <div style={{ flex: 1, marginTop: '130px' }}>
            <Outlet />
          </div>
         
        </div>
      </>
    );
  }

  return <RouterProvider router={router} />;
}


export default App
