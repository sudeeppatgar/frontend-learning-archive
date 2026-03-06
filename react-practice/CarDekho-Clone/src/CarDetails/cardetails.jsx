import React, { useState } from "react";
import './cardetails.css';
import heart from './images/heart.jpg'
import like from "./images/like.png";
import location from './images/location.png'
import share from './images/share.png'
import wtsapp from './images/wtsapp.jpeg'

const carImages = [
    "https://images10.gaadi.com/usedcar_image/4320910/original/10e495689e38c63ed57b8bc8a0a08fee.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/2576637a8940cdad3c87c57f64dbfe32.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/7e22d2a745f023d31cf1c79ecbd81924.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/1d0e7a56f0ee267546ee430089c711fa.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/93a7ae7062fdd0b1618bc5d5feca6423.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/99219699e6edf84def34785989357399.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/ef9fbdad4594456520593e9eb7809fd8.JPG?imwidth=640",
    "https://images10.gaadi.com/usedcar_image/4320910/original/dbe0deb27e9e4024c583e79a233e5637.JPG?imwidth=640",
  ];
const cardetails=()=>{
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
//   };
    return(
        <>
        <div className="outer">
          {/* <div className="inner1">
            <div className="inner1-1">
          <button className="prev-btn" onClick={prevImage}>&#10094;</button>
        <img src={carImages[currentIndex]} alt="Car" className="car-image" />
        <button className="next-btn" onClick={nextImage}>&#10095;</button>
        </div>
          </div> */}
          <div className="inner2">
            <div className="inner2-1">
              <div className="in1"><h2>2023 Maruti Alto K10 VXI plus</h2> <div className="in1-1"><button>CERTIFIED</button>
              <img 
  src={isFavorited ? like : heart} 
  alt="Favorite" 
  className={`heart-icon ${isFavorited ? "favorited" : ""}`} 
  onClick={toggleFavorite} 
/>

              {/* <img src={isFavorited ? heartPink : heart} alt="Favorite" className={heart-icon ${isFavorited ? "favorited" : ""}} onClick={toggleFavorite}/> */}
</div></div>
              <div className="in2"><p>5846 kms</p><h1>.</h1><p>Petrol</p><h1>.</h1><p>Manual</p><h1>.</h1><p>1st Owner</p></div>
              <div className="in3"><h2>$5.21 Lakh</h2><a href="">EMI starts@$12,932/mo</a></div>
              <div className="in4">
                <div className="in4-1">
                  <div className="in4-1-1">
                <img src={location} alt="" /><p>Yelahanka, Bangalore</p></div><div className="in4-1-2"><input type="checkbox" /><p>Compare</p></div>
                </div>
                <button>View Seller Details</button>
                </div>
            </div>
            <div className="inner2-2"><h3>Trending Car! </h3><p> High chances of sale in next 6 days</p></div>
              <div className="inner2-3"><img src={wtsapp} alt="" /><p>Chat with seller</p><img src={share} alt="" /><p>Share</p></div>
          </div>
        </div>
        </>
    )

}
export default cardetails;