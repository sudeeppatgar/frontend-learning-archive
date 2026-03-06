import React from 'react'
import './DetailsHeader.css'
import { Link } from 'react-router-dom'

const DetailsHeader=()=>{
  return (
    <div className="details-header">
      <div className="details-header-inn">
        <div className="tophead">
          <div className="th-1">
            <Link to={'/'}>
            <img src="https://static.thenounproject.com/png/3465504-512.png" alt="topbar" /> </Link>
          </div> 
          <div className="th-2">
          <img src="https://static.thenounproject.com/png/7529848-512.png" alt="topbar"/>
          <img src="https://static.thenounproject.com/png/4576129-512.png"alt="topbar"/>
          </div>
        </div>

        <div className="title">
          <div className="text">
          <h1>Fox News</h1>
            <p>By Lia Castro & Mohsen Salehi</p>
          </div>
          <div className="foxlogo">
            <img src="https://yt3.googleusercontent.com/ylpx4vRTytOJFSPNw30OY8lvi2Xo-XdmVrhuyaR-Txpmq7dEngno9LWL-fkUFfuR5xClOJ5-KA=s160-c-k-c0x00ffffff-no-rj"alt="foxlogo" />
          </div>
          </div> 
          </div>   
    </div>
  )
}
export default DetailsHeader

