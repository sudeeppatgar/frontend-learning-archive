import React from 'react'
import './Card.css';
import Carddata from './CardData';
import { Link } from 'react-router-dom';


const Card=()=>{
  return (
    <>
    <div className="card-div">
    {Carddata.health.slice(0,1).map((data)=>{
        return (
        <div className="card-inner">
            <div className="card" >
              <Link to={'/details'}>
                <img src={data.src} alt="" /></Link>
                <p>{data.srcname}</p>
                <h3>{data.title}</h3>
                <div className="card-inn">
                <div><a>{data.tag}</a>
                <p>•</p>
                <p>{data.date}</p>
                </div>
                <p>⋯</p>
            </div>
            </div>
            </div>
        )
    })}
        
    </div>
    </>
  )
}
export default Card;