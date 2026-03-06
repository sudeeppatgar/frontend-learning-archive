import React from 'react'
import './DetailsHash.css'
import carddata from '../../Components/Cards/CardData'

const DetailsHash=()=>{
  return (
    <div className="hash-main">
      <div className="hash-tags">
       {carddata.hashdata.map((hash)=>{
        return(
        <button>{hash.name}</button>
)})}
</div>
    </div>
  )
}
export default DetailsHash;