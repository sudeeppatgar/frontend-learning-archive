

import React from 'react'
import { useState } from 'react';
import './products.css'
import PropTypes from 'prop-types';
import arr from './images/r-arrow.png'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const carData = {
    SUV: [
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300" ,
        name: "Skoda Kylaq",
        price:"₹ 7.89 - 14.40 Lakh",
        },
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300" ,
            name: "Mahindra Scorpio N",
            price:"₹ 13.99 - 24.69 Lakh",
        },
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300" ,
            name: "Mahindra Bolero",
            price:"₹ 9.79 - -10.91 Lakh",
        },
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300" ,
            name: "Tayota Fortuner",
            price:"₹ 33.43 - 51.94 Lakh",
            },
            { img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1731318279714/front-left-side-47.jpg?tr=w-300" ,
                name: "Maruti Dzire",
                price:"₹ 6.79 - 10.14 Lakh",
                },
                { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/8703/1736412929424/front-left-side-47.jpg?tr=w-300" ,
                    name: "Hyundai Verna ",
                    price:"₹ 11.07 - 17.55 Lakh",
                },
    ],
    Hatchback: [
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/11709/1715245478487/front-left-side-47.jpg?tr=w-300" ,
            name: "Maruti Swift",
            price:"₹ 6.49 - 9.60 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10497/1697697558001/front-left-side-47.jpg?tr=w-300" ,
                name: "Maruti Swift",
                price:"₹ 6.66 - 9.83 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg?tr=w-300" ,
                name: "Maruti Wagon R",
                price:"₹ 5.54 - 7.33 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300" ,
                name: "Tata Tiago",
                price:"₹ 5 - 8.45 Lakh",
                },
                { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300" ,
                    name: "Skoda Kylaq",
                    price:"₹ 7.89 - 14.40 Lakh",
                    },
                    { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300" ,
                        name: "Mahindra Scorpio N",
                        price:"₹ 13.99 - 24.69 Lakh",
                    },
                    { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300" ,
                        name: "Mahindra Bolero",
                        price:"₹ 9.79 - -10.91 Lakh",
                    },
    ],
    Sedan: [
        { img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1731318279714/front-left-side-47.jpg?tr=w-300" ,
            name: "Maruti Dzire",
            price:"₹ 6.79 - 10.14 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/8703/1736412929424/front-left-side-47.jpg?tr=w-300" ,
                name: "Hyundai Verna ",
                price:"₹ 11.07 - 17.55 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Camry/11344/1733916451269/front-left-side-47.jpg?tr=w-300" ,
                name: "Toyota Camry",
                price:"₹ 48 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg?tr=w-300" ,
                name: "Hyundai Aura",
                price:"₹ 6.54 - 9.11 Lakh",
            },
            
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg?tr=w-300" ,
                name: "Toyota Innova Crysta",
                price:"₹ 19.99 - 26.55 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carens/11974/Kia-Carens-Gravity/1725528523580/front-left-side-47.jpg?tr=w-300" ,
                name: "Kia Carens",
                price:"₹ 10.60 - 19.70 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carnival/8001/1728021410510/front-left-side-47.jpg?tr=w-300" ,
                name: "Kia Carnival",
                price:"₹ 63.90 Lakh",
                },
    ],
    MUV: [
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg?tr=w-300" ,
            name: "Maruti Ertiga",
            price:"₹ 8.69 - 13.03 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg?tr=w-300" ,
                name: "Toyota Innova Crysta",
                price:"₹ 19.99 - 26.55 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carens/11974/Kia-Carens-Gravity/1725528523580/front-left-side-47.jpg?tr=w-300" ,
                name: "Kia Carens",
                price:"₹ 10.60 - 19.70 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carnival/8001/1728021410510/front-left-side-47.jpg?tr=w-300" ,
                name: "Kia Carnival",
                price:"₹ 63.90 Lakh",
                },
                
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg?tr=w-300" ,
                name: "Toyota Innova Crysta",
                price:"₹ 19.99 - 26.55 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carens/11974/Kia-Carens-Gravity/1725528523580/front-left-side-47.jpg?tr=w-300" ,
                name: "Kia Carens",
                price:"₹ 10.60 - 19.70 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carnival/8001/1728021410510/front-left-side-47.jpg?tr=w-300" ,
                name: "Kia Carnival",
                price:"₹ 63.90 Lakh",
                },
    ],
    Luxury: [
        { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/12294/1736235204503/front-left-side-47.jpg?tr=w-300" ,
            name: "Land Rover Defender",
            price:"₹ 1.04 -1.57Cr",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/11540/1719037980777/front-left-side-47.jpg?tr=w-300" ,
                name: "Land Rover Range Rover",
                price:"₹ 2.36 -4.98Cr",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Vellfire/10337/1715313437175/front-left-side-47.jpg?tr=w-300" ,
                name: "Toyata Vellfire",
                price:"₹ 1.22 -1.32Cr",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA-2024/9731/1679039244149/front-left-side-47.jpg?tr=w-300" ,
            name: "Mercedes-Benz GLA",
            price:"₹ 50.80 -55.80 Lakh",
            }, 
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300" ,
            name: "Skoda Kylaq",
            price:"₹ 7.89 - 14.40 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300" ,
                name: "Mahindra Scorpio N",
                price:"₹ 13.99 - 24.69 Lakh",
            },
            { img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300" ,
                name: "Mahindra Bolero",
                price:"₹ 9.79 - -10.91 Lakh",
            },
    ]
  };
const products=()=> {
      const [selectedType, setSelectedType] = useState("SUV");
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    // const nextCar = () => {
    //     setCurrentIndex((prevIndex) => 
    //         prevIndex < carData[selectedType].length - 1 ? prevIndex + 1 : 1
    //     );
    // };

    // const prevCar = () => {
    //     setCurrentIndex((prevIndex) => 
    //         prevIndex > 0 ? prevIndex - 1 : carData[selectedType].length - 1
    //     );
    // };

    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 1,
    //     swipeToSlide: false,
    //   };
  return (
    <>
    <div class="content">
    <div class="cont-head">
        <h2>The most searched cars</h2>
        <div className="a-tag">
        {Object.keys(carData).map((type) => (
          <button
            key={type}
            className={selectedType === type ? "active" : ""}
            onClick={() => setSelectedType(type)}>
            {type}
          </button>
        ))}
        </div>
    </div>
    <div className="cont-body">
    <div className="cont-body-item">
        {carData[selectedType].map((car, index) => (
            // <Slider {...settings}>
          <div key={index}  className="b1">
            <img src={car.img} alt={car.name} />
            <div class="inner">
            <h2>{car.name}</h2>
            <h3>{car.price}</h3>
            </div> 
            <div className="inner-b">
            <button>Check January Offer</button>
            </div>
            </div>
            // </Slider>
        ))}
    </div>
        <div class="down">
        <a href="">View All SUV Carr</a><div><img src={arr} alt="" /></div>
    </div>
    </div>
    
</div>
</>
  )
}
export default products;

products.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};


