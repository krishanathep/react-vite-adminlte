import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavbar from './layouts/WithNavbar';
import WithOutnavbar from './layouts/WithOutnavbar';
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Home from './pages/home'
import About from './pages/about'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<WithOutnavbar/>}>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route element={<WithNavbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App