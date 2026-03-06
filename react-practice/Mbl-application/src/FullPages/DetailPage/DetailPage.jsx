import React from 'react'
import DetailsHeader from '../../Details-Components/DetailsHeader/DetailsHeader'
import Card from '../../Components/Cards/Card'
import Detailsinfo1 from '../../Details-Components/DetailsInfo1/Detailsinfo1'
import DetailsHash from '../../Details-Components/DetailsHash/DetailsHash'
import BelowIcons from '../../Components/BelowIcons/BelowIcons'
const DetailPage=()=> {
  return (
    <div className='Details-container'>
        <DetailsHeader/>
        <Card/>
        <Detailsinfo1/>
        <DetailsHash/>
        <BelowIcons/>
    </div>
  )
}
export default DetailPage