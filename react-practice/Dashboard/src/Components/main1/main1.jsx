import React from "react";
import './main1.css';
import payment from './bank-note-01-svgrepo-com.svg';




const Main1 = () => {
    return (
        <>
        <div className="main">
            <div className="main1">
                <div className="main1-sub0">
                    
                <span className="nextpayment" > <img src={payment} alt="" className="payment"/></span>
                  <span className="nextpayment1">Next Payment </span>  
                     </div>
                <div className="main1-sub1"> <span className="main1-sub1-span"><h4>$413,258.12</h4><p>August 5th 2023</p> </span> <span className="main1-sub1-span1"> Draw 4</span> </div>
                <div className="main1-sub1"><span className="main1-sub1-span"><h4>$413,258.12</h4> <p>August 5th 2023</p> </span> <span className="main1-sub1-span1"> Draw 7</span> </div>
                <div className="main1-sub1"><span className="main1-sub1-span"><h4>$413,258.12</h4><p>August 5th 2023</p> </span> <span className="main1-sub1-span1"> Draw 8</span> </div>
                <div className="main1-sub1"><span className="main1-sub1-span"><h4>$413,258.12</h4><p>August 5th 2023</p> </span> <span className="main1-sub1-span1"> Draw 9</span> </div>
                <div className="main1-sub2" > <span className="btn" > View all upcoming payments</span> </div>
                






            </div>
            <div className="main2">
                 <div className="main2-sub">
                <div className="main2-sub1"><p>  Upgarde To Pro   </p> <p>$250/Month</p></div>
                <div className="main2-sub1" > <span className="main2-sub1-span">Upgarde your available capital with our pro subscription and get 1-1</span>

                </div> 
                <div className="main2-sub3"><div className="main1-sub3-box1"> <button className="btn1">Upgrade my plan</button></div></div>
                
                
                </div>




            </div>







        </div>  
        </>
    )
}
export default Main1;