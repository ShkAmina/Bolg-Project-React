import React from 'react'
import ArticalPage from './ArticalPage'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NewPage from './NewPage'
import Navbar from './Navbar'
import "./Navbar.css"
function App() {
  return (
    <div>
      <h1 className='HEADING'><span>The</span> Siren</h1>

      <div className='navBar'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<ArticalPage />} />
        <Route path='/NewPage/:id' element={<NewPage />} />
      </Routes>

    </div>

  )
}

export default App