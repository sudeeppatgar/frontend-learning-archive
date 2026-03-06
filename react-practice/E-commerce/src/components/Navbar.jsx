import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({setData,cart}) => {
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilterOptions, setShowFilterOptions] = useState(false)

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  const handleFilterClick = () => {
    setShowFilterOptions(!showFilterOptions)
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">E-Cart</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>


            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div> 
        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className='nav-list'>
            <div className='nav-filter'onClick={handleFilterClick}>Filter by price {"-"}</div>
            {showFilterOptions && (
              <div className="filter-options">
                <div
                  onClick={()=>filterByPrice(29999)}
                  className="items1">{">="}29999</div>
                  <div
                  onClick={()=>filterByPrice(49999)}
                  className="items1">{">="}49999</div>
                  <div
                  onClick={()=>filterByPrice(69999)}
                  className="items1">{">="}69999</div>
                  <div
                  onClick={()=>filterByPrice(89999)}
                  className="items1">{">="}89999</div>
                  <div
                  onClick={()=>filterByPrice(21000)}
                  className="items1">{">="}21000</div>
              </div>
            )}   
            </div>
            <div className="nav-bar-wrappers">
    <div 
    onClick={()=>setData(items)}
    className="items">No Filter</div>
    <div 
    onClick={()=>filterByCategory('mobiles')}
     className="items">Mobiles</div>
    <div
    onClick={()=>filterByCategory('laptops')}
     className="items">Laptops</div>
    <div
    onClick={()=>filterByCategory('tablets')}
     className="items">Tablets</div>
     <div
    onClick={()=>filterByCategory('smartwatch')}
     className="items">Smartwatch</div>
     <div
    onClick={()=>filterByCategory('earbuds')}
     className="items">Earbuds</div>
    <div
    onClick={()=>filterByCategory('computer')}
     className="items">computer</div>
     <div 
    onClick={()=>filterByCategory('tv')}
     className="items">TV</div>
    
    </div></div>
          )
        }   

      
    </header>
    </>
  )
}

export default Navbar







// <select className="nav-bar-wrapper "style={{display: 'flex', flexDirection: 'colum', flexWrap: 'wrap'}}>
//             <option className="items">Filter by {"->"}</option>
//             <option
//             onClick={()=>setData(items)}
//             className="items">No Filter</option>
//             <option 
//             onClick={()=>filterByCategory('mobiles')}
//              className="items">Mobiles</option>
//              <option 
//             onClick={()=>filterByCategory('tv')}
//              className="items">TV</option>
//             <option
//             onClick={()=>filterByCategory('laptops')}
    
//              className="items">Laptops</option>
//             <option
//             onClick={()=>filterByCategory('tablets')}
    
//              className="items">Tablets</option>
//             <option
//             onClick={()=>filterByPrice(29999)}
//             className="items">{">="}29999</option>
//             <option
//             onClick={()=>filterByPrice(49999)}
//             className="items">{">="}49999</option>
//             <option
//             onClick={()=>filterByPrice(69999)}
//             className="items">{">="}69999</option>
//             <option
//             onClick={()=>filterByPrice(89999)}
//             className="items">{">="}89999</option>
//             </select>


// {
//   location.pathname == '/' && (
    

//   )
// }   
