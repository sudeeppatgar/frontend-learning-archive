import React, { useState } from "react";
import './dashboard.css';
import Dashboard from './images/Dashboard.png'
import document from './images/Document.png'
import help from './images/Help.png'
import live from './images/Live.png'
import message from './images/Messages.png'
import mytask from './images/Mytask.png'
import noti from './images/Notification.png'
import prod from './images/Products.png'
import rep from './images/Reporting.png'
import sch from './images/Schedule.png'
import user from './images/User.png'
import logo from './images/logo.jpeg'
import search from './images/search.png'
import symb from './images/symb.png'
import k from './images/k.png'
import arrow from './images/arrow-d.png'
import Profile from "./profile";


const dashboard=()=>{
    const [showProfile, setshowProfile] = useState(false);
    // const [showSlider, setshowSlider] = useState(false);

    // const togglesidebar=()=>{
    //     setshowSlider(!showSlider);
    // }

    const toggleProfile = () => {
        setshowProfile((prev) => !prev);
      };
    return(
        <div className="outer-d" >
            <div className="inner-d">
                <div className="m-logo">
                    <img src={logo} alt="" /><h2>Slukh</h2>
                </div>
                <div className="searchs">
                    <div className="search-inp">
                        <img className="imags" src={search} alt="" />
                    <input type="text" placeholder="Search" />
                    <div className="s-img">
                    <img src={symb} alt="" />
                    <img src={k} alt="" />
                    </div>
                    </div>
                </div>
                <div className="menu">
                    <h3 className="menu-h3">Menu</h3>
                    <div className="menu-item">
                        <div className="item">
                            <img className="imags" src={Dashboard} alt="" />
                            <h3>Dashboard</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={prod} alt="" />
                            <h3>Products</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={sch} alt="" />
                            <h3>Schedule</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={mytask} alt="" />
                            <h3>My Task</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={rep} alt="" />
                            <h3>Reporting</h3>
                        </div>
                    </div>
                </div>
                <div className="account">
                <h3 className="account-h3">Account</h3>
                    <div className="menu-item">
                        <div className="item">
                            <img className="imags" src={user} alt="" />
                            <h3>User</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={message} alt="" />
                            <h3>Message</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={document} alt="" />
                            <h3>Document</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={noti} alt="" />
                            <h3>Notification</h3>
                        </div>
                    </div>
                </div>
                <div className="opn">
                <div className="menu-item">
                        <div className="item">
                            <img className="imags" src={live} alt="" />
                            <h3 >Live chat</h3>
                        </div>
                        <div className="item">
                            <img className="imags" src={help} alt="" />
                            <h3>Help</h3>
                        </div>
                        </div>
                </div>
            </div>
            <div className="profile">
                <div className="pf">
                    <img src={logo} alt="" />
                    <div className="p-info" >
                        <h3>Dianne Russell</h3>
                        <p>dianne.rus@gmail.com</p>
                    </div>
                    <img src={arrow} alt="" onClick={toggleProfile}/>
                    <Profile show={showProfile} onClose={toggleProfile} />
                </div>
                </div>
        </div> 
    )
}
export default dashboard;