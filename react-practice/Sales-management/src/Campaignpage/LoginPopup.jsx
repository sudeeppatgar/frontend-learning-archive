import React from 'react';
import './login.css'
import totmem from './log-images/tot-members.jpeg'
import sms from './log-images/sms.jpg'
import msg from './log-images/msg.jpg'
import user from './log-images/user.jpg'
import cal from './log-images/cal.png'
import wrong from './log-images/wrong.png'

const LoginPopup = ({ show, onClose }) => {
  // If show is false, return null (don't render)
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
        <div class="form-container" onClick={(e) => e.stopPropagation()}>
            <div className="w-img">
        <h2 className='l-h'>Add Hotel</h2><img src={wrong} alt="" onClick={onClose}/>
        </div>
        <form>
            <label for="name">Name <span class="required"></span></label>
            <input class="inp" type="text" id="name" name="name" required/>

            <label for="image-url">Image URL</label>
            <input class="inp" text="url" id="image-url" name="image-url"/>

            <label for="address">Address <span class="required"></span></label>
            <input class="inp" id="address" name="address" required/>

            <label for="contact">Contact <span class="required"></span></label>
            <input class="inp" id="contact" name="contact" required/>

            <label for="rating">Rating</label>
            <input class="inp" type="number" id="rating" name="rating" min="1" max="5"/>

            <button className='l-btn' type="submit">Submit</button>
        </form>
        </div>
       
</div>
  );
};

export default LoginPopup;