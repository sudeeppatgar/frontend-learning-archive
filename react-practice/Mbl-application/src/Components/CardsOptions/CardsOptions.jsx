import React from 'react'
import './CardsOptions.css'
import carddata from '../Cards/CardData'

const CardsOptions=()=>{
  return (
    <>
    <div className="card-opn">
    <div className="opn-inner">
    {carddata.politics.slice(0,3).map((data)=>{
        return (
            <div className="opn-cards" >
                <img src={data.src} alt="" />
                <div className="opn-inn">
                <p>{data.srcname}</p>
                <h3>{data.title}</h3>
                <div>
                  <div>
                <a>{data.tag}</a>
                <p>•</p>
                <p>{data.date}</p>
                </div>
                <div>
                <p>⋯</p>
                </div>
                </div>
            </div>
            </div>
        )
      })}
      </div>
      </div>
    </>
  )
}
export default CardsOptions;