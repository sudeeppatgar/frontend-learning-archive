import React from 'react'
import './Logo.css'
import logodata from './LogoData'

const Logo=()=>{
  return (
    <>
    <div className="logo-main">
      <div className="logo-flow">
    {logodata.map((data)=>{
      return (
            <div className="logo-inner">
                <div className="logo-img">
                <img src={data.src} alt="" />
                </div>
                <p>{data.newsname}</p>
            </div>
        )
      })}
      </div>
    </div>
    </>
  )
}
export default Logo;