import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
