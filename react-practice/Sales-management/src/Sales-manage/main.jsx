import totmem from './images/tot-members.jpeg'
import newmem from './images/new-member.png'
import inactive from './images/inactive.png'
import home from './images/home.jpg'
import active from './images/active.png'
import arrow from './images/arrow.png'
import actmem from './images/active-mem.jpeg'
import filter from './images/filter.jpg'
import downarr from './images/down-arrow.jpg'
import bharagari from './images/bharagari.jpg'
import golden from './images/golden.jpeg'
import ctl from './images/ctl.jpg'
import './main.css'
import React, { useState } from 'react';
import LoginPopup from '../Campaignpage/LoginPopup'


  
const Main=()=>{
    const [showLogin, setShowLogin] = useState("");
  
    const openLoginPopup = () => setShowLogin(true);
    const closeLoginPopup = () => setShowLogin(false);
    return(
        <div class="body">
        <div class="b-1">
            <div className="b1-1">
            <div class="home">
                <img src={home} alt=""/>
                <div class="home-n">
                <img src={arrow} alt=""/>
                <p>Hotel</p>
                <img src={arrow} alt=""/>
                <h3>Overview</h3>
                </div>
            </div>
            <div class="home-btn">
            <button onClick={openLoginPopup}>Create Hotel</button>
            <LoginPopup show={showLogin} onClose={closeLoginPopup} />
                </div>
        </div>
        </div>
        <div class="b-2">
            <div class="atag">
            <a href="">Oportunities 40</a>
            <a href="">Accounts 40</a>
            <a href="">Contacts</a>
            <a href="">Leads 21</a>
        </div>
        </div>
        <div class="b-3">
            <h2>Accounts</h2>
           <div class="totals">
                <div class="total">
                    <div class="t-img"><img src={totmem} alt=""/></div>
                    <div class="t-txt">
                        <p>Total members</p>
                        <h3>236</h3>
                    </div>
                </div>
                <div class="total">
                    <div class="t-img"><img src={newmem} alt=""/></div>
                    <div class="t-txt">
                        <p>New members</p>
                        <h3>87</h3>
                    </div>
                    </div>
                <div class="total">
                    <div class="t-img"><img src={actmem} alt=""/></div>
                    <div class="t-txt">
                        <p>Active members</p>
                        <h3>198</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="b-4">
            <div class="b4-btn">
                <button><img src={filter} alt=""/>Filter</button>
                <button>All status<img src={downarr} alt=""/></button>
            </div>
            <div className="b4-body">
                <table>
                    <thead>
                        <tr>
                            <td className="name1">Name</td>
                            <td className="opp">images</td>
                            <td>Address</td>
                            <td>Contact</td>
                            <td>Rating</td>
                            <td>Created At</td>
                            <td>Updated At</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        <tr>
                            <td className="name">Ctl Food Solutions</td>                            
                            <td className="opp"><img src={ctl} alt="" /></td>  
                            <td className="memid">asd</td>                          
                            <td className="memid">asd</td>                          
                            <td className="memid">5</td>                          
                            <td className="memid">24/01/2025, 09:32:42</td>                          
                            <td className="memid">24/01/2025, 09:32:42</td>                        
                            <td><div class="st-div"><img src={active} alt=""/><button>Active</button></div></td>                            
                                                        
                        </tr>
                        <tr className="r-2">
                            <td className="name">Golden kudle Beach Resort</td>                            
                            <td className="opp"><img src={golden} alt="" /></td> 
                            <td className="memid">Gokarna</td>                           
                            <td className="memid">998988899</td>                           
                            <td className="memid">5</td>                           
                            <td className="memid">24/01/2025, 10:05:27</td>                           
                            <td className="memid">24/01/2025, 10:05:27</td>                           
                            <td><div class="in-div"><img src={inactive} alt=""/><button>Inactive</button></div></td>                            
                                                        
                        </tr>
                        <tr>
                            <td className="name">Bhargari bojana</td>                            
                            <td className="opp"><img src={bharagari} alt="" /></td>                           
                            <td className="memid">Bengaluru</td>                            
                            <td className="memid">89798798798</td>                            
                            <td className="memid">5</td> 
                            <td className="memid">24/01/2025, 10:07:00</td>                    
                            <td className="memid">24/01/2025, 10:07:00</td>                    
                            <td><div class="st-div"><img src={active} alt=""/><button>Active</button></div></td>                            
                                                        
                        </tr>
                        {/* <tr  className="r-2">
                            <td className="name"><input type="checkbox" />Alexander Thompson Anderson </td>                            
                            <td className="opp">CRM Implementation </td>                            
                            <td><div class="in-div"><img src={inactive} alt=""/><button>Inactive</button></div></td>                            
                            <td className="memid">#BH101DD</td>                            
                        </tr>
                        <tr>
                            <td className="name"><input type="checkbox" />Benjamin Harrison Johnson</td>                            
                            <td className="opp">E-commerce Setup</td>                            
                            <td><div class="st-div"><img src={active} alt=""/><button>Active</button></div></td>                            
                            <td className="memid">#VJ234EE</td>                            
                        </tr>
                        <tr  className="r-2">
                            <td className="name"><input type="checkbox" />Christopher Taylor Richardson</td>                            
                            <td className="opp">SEO Opyimization </td>                            
                            <td><div class="st-div"><img src={active} alt=""/><button>Active</button></div></td>                            
                            <td className="memid">#CT567FF</td>                            
                        </tr>
                        <tr>
                            <td className="name"><input type="checkbox" /> Nicholas Thompson Peterson </td>                            
                            <td className="opp">Lead Generation Strategy </td>                            
                            <td><div class="st-div"><img src={active} alt=""/><button>Active</button></div></td>                            
                            <td className="memid">#IP34511</td>                            
                        </tr>
                        <tr  className="r-2">
                            <td className="name"><input type="checkbox" />Jonathan Martinez Thompson</td>                            
                            <td className="opp">Product Launch</td>                            
                            <td><div class="in-div"><img src={inactive} alt=""/><button>Inactive</button></div></td>                            
                            <td className="memid">#SR890GG</td>                            
                        </tr>
                        <tr>
                            <td className="name"><input type="checkbox" />Theodore Harrison williams</td>                            
                            <td className="opp">Cybersecurity Audit</td>                            
                            <td><div class="in-div"><img src={inactive} alt=""/><button>Inactive</button></div></td>                            
                            <td className="memid">#NT102HH</td>                            
                        </tr>
                        <tr  className="r-2">
                            <td className="name"><input type="checkbox" /> Elijah Robinson</td>                            
                            <td className="opp">Branding and Rebranding</td>                            
                            <td><div class="st-div"><img src={active} alt=""/><button>Active</button></div></td>                            
                            <td className="memid">#JM678JJ</td>                            
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
export default Main;
