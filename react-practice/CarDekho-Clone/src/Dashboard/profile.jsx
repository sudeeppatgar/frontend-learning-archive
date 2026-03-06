import React from 'react';
import './dashboard.css'

import logo from './images/logo.jpeg'
import user from './images/User.png'
import logout from './images/Logout.png'
import setting from './images/Settings.png'
import upgrade from './images/Upgrade.png'
import addaccount from './images/Addaccount.png'

const Profile = ({ show, onClose }) => {
  // If show is false, return null (don't render)
  if (!show) return null;

  return (
    <div className="popup-profile" onClick={onClose}>
        <div class="profile-container" onClick={(e) => e.stopPropagation()}>
         <div className="profile">
            <img src={logo} alt="" />
            <div className="p-info">
            <h3>Dianne Russell</h3>
            <p>dianne.rus@gmail.com</p>
            </div>
            </div>
            <div className="menu-item">
                <div className="item">
                    <img className="imags" src={user} alt="" />
                    <h3>Profile</h3>
                </div>
                <div className="item">
                    <img className="imags" src={upgrade} alt="" />
                    <h3>Upgrade to pro</h3>
                </div>
                <div className="item">
                    <img className="imags" src={setting} alt="" />
                    <h3>Settings</h3>
                </div>
                </div>
                <div className="menu-item">
                    <div className="item">
                    <img className="imags" src={addaccount} alt="" />
                    <h3>Live chat</h3>
                    </div>
                    <div className="item">
                    <img className="imags" src={logout} alt="" />
                    <h3>Log out</h3>
                    </div>
                    </div>
                </div>
       
</div>
  );
};

export default Profile;
       