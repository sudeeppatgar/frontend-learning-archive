import React from 'react'
import './NewsHeader.css'
import search from './images/serach.png'
import arrow from './images/search.png'
const NewsHeader=()=>{
  return (
    <div className="header">
    <div className="nav-bar">
    <img src={arrow}/>  
      <h2 className="title">Welcome</h2>
      <img src={search}/>   
    </div>
    <div className="tabs">
      <button>Latest</button>
      <button>World</button>
      <button>Business</button>
      <button>Sports</button>
      <button>Life</button>
    </div>
  </div>
  )
}
export default NewsHeader;

