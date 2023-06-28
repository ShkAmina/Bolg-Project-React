import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./App.css"
import Avtar from "./avtar1.jpg"
import Icons from "./icons.png"
function NewPage() {
  const Nav = useNavigate();
  const Loc = useLocation().state
  return (
    <>

      <div className="profile">
        <div className='proflex'>
          <img className="bckcolor" src={Avtar} alt="" />
          <div style={{ marginLeft: "15px" }}>
            <h4>Dmitry NozhenkoJun</h4>
            <p>11,2023.10 min read.</p>
          </div>
        </div>
        <div>
          <img className="bckcolor" src={Icons} alt="" />
        </div>
      </div>

      <div className='Link'>
        <img style={{ width: "300px", height: "300px", marginTop: "10px " }} src={Loc.urlToImage} alt='Image Loading...'></img>
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
    </>
  )
}

export default NewPage