import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Home from './pages/home/Home';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
         
      </Router>
    </>
  )
}

export default App
