import React from 'react';
import './style.css';
import logo1 from './images/logo1.jpg'
import dashboard from './images/dashboard.jpg'
import cake from './images/cake.jfif'
import feedback from './images/feedback.jpg'
import message from './images/message.jfif'
import ordhistory from './images/ord-history.jpg'
import payment from './images/payment.jpg'
import settings from './images/settings.jpg'
import food from './images/food-img.webp'
import bell from './images/bell.jfif'
import sudeep from './images/sudeep.jpg'
import arrow1 from './images/arrow1.jpg'
import filter from './images/filter.webp'
import donuts from './images/donuts.jfif'
import burger from './images/burger.jfif'
import icecream from './images/icecream.jfif'
import pototes from './images/pototes.jfif'
import fuchka from './images/fuchka.png'
import hotdog from './images/pototes.jfif'
import chicken from './images/chicken.jfif'
import pizza from './images/pizza.webp'
import payments from './images/payments.png'
const Food=()=>{
    return(
        <div className="box">
            <div className="left">
                <div className="logo">
                    <img src={logo1} alt="" /><h2 id='r'>foodi</h2><h2 id='y'>slice</h2>
                </div>
                <div className="panel">
                    <div className="p1"><img src={dashboard} alt="" /><h3>Dashboard</h3></div>
                    <div className="p1"><img src={cake} alt="" /><h3>Food Order</h3></div>
                    <div className="p1"><img src={feedback} alt="" /><h3>Feedback</h3></div>
                    <div className="p1"><img src={message} alt="" /><h3>Message</h3></div>
                    <div className="p1"><img src={ordhistory} alt="" /><h3>Order History</h3></div>
                    <div className="p1"><img src={payment} alt="" /><h3>Payment details</h3></div>
                    <div className="p1"><img src={settings} alt="" /><h3>Customization</h3></div>
                </div>
                <div className="details">
                    <div className="detail">
                        <img src={food} alt="" />
                        <h2>How to order food ?</h2>
                        <p>Ordering food from our web app is a seamless and delightful experience designed to satisfy you effectively</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <div className="inp">
                        <input type="text" placeholder='Search food' /><button>Filter <img src={filter} alt="" /></button>
                    </div>
                    <div className="user">
                       <img src={bell} alt="" /> <div><img src={sudeep} alt="" /><h3>Sudeep patgar</h3><img src={arrow1} alt="" id='arr'/></div>
                    </div>
                </div>
                <div className="main">
                    <div className="main1">
                        <div className="m-left">
                        <div className="cat1">
                            <h2>Explore Categories</h2>
                            <div className="food">
                                <div className="food1"><img src={donuts} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={burger} alt="" /><h3>Burger</h3></div>
                                <div className="food1"><img src={icecream} alt="" /><h3>Ice</h3></div>
                                <div className="food1"><img src={pototes} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={pototes} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={fuchka} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={pizza} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={hotdog} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={chicken} alt="" /><h3>Donuts</h3></div>
                                <div className="food1"><img src={chicken} alt="" /><h3>Donuts</h3></div>
                            </div>
                        </div>
                        <div className="cat2">
                            <div className='c-head'><h2>Popular</h2><h2>Recent</h2></div>
                            <div className="foods">
                                <div className="food2">
                                    <img src={burger} alt="" />
                                    <h2>Vegetable Burger</h2>
                                    <div className="price"><h2 className='pr'>$25</h2><h4>*2.5k</h4></div>
                                    <div className="btn"><button className='btn1'>Wishlist</button><button className='btn2'>Order Now</button></div>
                                </div>
                                <div className="food2">
                                    <img src={burger} alt="" />
                                    <h2>Meat Burger</h2>
                                    <div className="price"><h2 className='pr'>$25</h2><h4>*2.5k</h4></div>
                                    <div className="btn"><button className='btn1'>Wishlist</button><button className='btn2'>Order Now</button></div>
                                </div>
                                <div className="food2">
                                    <img src={burger} alt="" />
                                    <h2>Cheese Burger</h2>
                                    <div className="price"><h2 className='pr'>$25</h2><h4>*2.5k</h4></div>
                                    <div className="btn"><button className='btn1'>Wishlist</button><button className='btn2'>Order Now</button></div>
                                </div>
                                <div className="food2">
                                    <img src={burger} alt="" />
                                    <h2>Vegetable Burger</h2>
                                    <div className="price"><h2 className='pr'>$25</h2><h4>*2.5k</h4></div>
                                    <div className="btn"><button className='btn1'>Wishlist</button><button className='btn2'>Order Now</button></div>
                                </div>
                                <div className="food2">
                                    <img src={burger} alt="" />
                                    <h2>bean Burger</h2>
                                    <div className="price"><h2 className='pr'>$25</h2><h4>*2.5k</h4></div>
                                    <div className="btn"><button className='btn1'>Wishlist</button><button className='btn2'>Order Now</button></div>
                                </div>
                                <div className="food2">
                                    <img src={burger} alt="" />
                                    <h2>Wild Salmon Burger</h2>
                                    <div className="price"><h2 className='pr'>$25</h2><h4>*2.5k</h4></div>
                                    <div className="btn"><button className='btn1'>Wishlist</button><button className='btn2'>Order Now</button></div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                        <div className="m-right">
                            <div className="m-head"><h2>Invoice</h2></div>
                            <div className="m-food">
                                <img src={burger} alt="" />
                                <div>
                                    <h2>Vegetable Burger</h2>
                                    <h2 className='pr'>$25</h2>
                                </div>
                            </div>
                            <div className="m-food">
                                <img src={burger} alt="" />
                                <div>
                                    <h2>Vegetable Burger</h2>
                                    <h2 className='pr'>$25</h2>
                                </div>
                            </div>
                            <div className="m-food">
                                <img src={burger} alt="" />
                                <div>
                                    <h2>Vegetable Burger</h2>
                                    <h2 className='pr'>$25</h2>
                                </div>
                            </div>
                            <div className="payment">
                                <div className="pay-head"><h2>Payment System</h2></div>
                                <div className="pay-body"><h3>SUb Total</h3><h3>$85</h3></div>
                                <div className="pay-body"><h3>Tax</h3><h3>$6</h3></div>
                                <div className="pay-total"><h3>Total Payment</h3><h3>$79</h3></div>
                                <h2>Payment Method</h2>
                                <img src={payments} alt="" />
                            </div>
                            <div className='pay-btn'>
                            <button  className='btn2'>Place An Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
    )
}
export default Food;