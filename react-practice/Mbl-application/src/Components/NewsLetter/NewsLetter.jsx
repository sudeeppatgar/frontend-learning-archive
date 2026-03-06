import React from 'react'
import './NewsLetter.css'
const NewsLetter=()=>{
  return (
    <>
    <div className="new-letter-outer">
        <div className="new-letter-inner">
            <div className="news-l1">
                <h2>Newsletter</h2>
            </div>
            <div className="news-l2">
                <input type="email" placeholder="Email" />
                <button>Subscribe</button>
            </div>
            <div className="news-l3">
                <p>By clicking on Subscribe button you agree<a href="">Privacy Policy</a></p>
            </div>
        </div>
    </div>
    </>
  )
}
export default NewsLetter;