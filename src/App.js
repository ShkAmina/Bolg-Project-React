import React from 'react'
import ArticalPage from './ArticalPage'
import { Link, Routes,Route } from 'react-router-dom'
import Home from './Home'
import NewPage from './NewPage'
function App() {
  return (
    <div>
      <h1 className='HEADING'><span>The</span> Siren</h1>
      
      <div className='navBar'>
      <Link to="/" className='line'>Home</Link>
        <Link to="/bollywood" className='line'>Bollywood</Link>
        <Link to="/hollywood" className='line'>Hollywood</Link>
        <Link to="/technology" className='line'>Technology</Link>
        <Link to="/food" className='line'>Food</Link>
        <Link to="/fitness" className='line'>Fitness</Link>
      </div>
      <hr></hr>

  
      <Routes>

      <Route path='/' element={ <Home/>}/>
        <Route path='/:category' element={ <ArticalPage />}/>
        <Route path='/NewPage/:id' element={<NewPage/>}/>
      </Routes>

    </div>
   
  )
}

export default App