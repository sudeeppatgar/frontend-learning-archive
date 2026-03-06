import React from 'react'
import './Detailsinfo1.css'
import carddata from '../../Components/Cards/CardData'

const Detailsinfo1 = ()=>{
  return (
    <>
    <div className='info-main'>
    <div className="info">
    {carddata.info.slice(0,2).map((info)=>{
        return(
            <div className="info-inner1">
            <h3>{info.name}</h3>
            <p>{info.para}</p>
            </div>
    )})}
    <div className="info-card">
        <h2>That huge demand is causing even major bank systems to creak</h2>
        <p>----     By iruka Akuchi London. 2008</p>
    </div>
    {carddata.info.slice(2,3).map((info)=>{
        return(
            <div className="info-inner2">
            <p>{info.para}</p>
            <h3>{info.name}</h3>
            <div className="info-img">
            <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2011/10/28/Local/Images/KELLYCOL30-01.JPG?t=20170517" alt="" />
            <p>{info.para}</p>
            </div>
            <p>{info.para}</p>
            </div>
        )
    })}
       </div>
    </div>
    </>
  )
}
export default Detailsinfo1