import React from 'react'
import NewsHeader from '../../Components/NewsHeader/NewsHeader'
import Card from '../../Components/Cards/Card'
import CardsOptions from '../../Components/CardsOptions/CardsOptions'
import NewsPremium from '../../Components/NewsPremium/NewsPremium'
import CardsOption from '../../Components/CardsOptions1/CardsOption'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import BelowIcons from '../../Components/BelowIcons/BelowIcons'
import { Link } from 'react-router-dom'
const NewsPage=()=> {
  return (
    <div className="container">
      <NewsHeader/>
        <Card/>
        {/* <Logo/> */}
        <CardsOptions/>
        <NewsPremium/>
        <CardsOption/>
        <NewsLetter/>
        <BelowIcons/>
    </div>
  )
}

export default NewsPage