import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./App.css"
function NewPage() {
  const Nav = useNavigate();
  const Loc = useLocation().state
  return (

    <div className='Link'>
      <img style={{ width: "350px", height: "300px" ,marginTop:"10px "}} src={Loc.urlToImage}></img>
      <h1 className='newsheading'>
        {Loc.title}
      </h1>
      <p className='containt'>
        {Loc.content}
      </p>
      <p >{Loc.publishedAt}</p>
      <button
        onClick={() => {
          Nav(-1);
        }}
        className="BacktoHome"
      >
        <div className='bAckBTN'>
        <i class="fa-solid fa-arrow-left-long"></i>
        Back
        </div>
      </button>


    </div>
  )
}

export default NewPage