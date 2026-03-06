import React from "react";
import './Top.css';
import BottomContent from "../Mid-bottom-content/Bottom";
import Main1 from '../main1/main1'
function TopContent(){
    return(
        <>
        <h2 style={{color:"black",margin:"20px 0 0 30px"}}>Dashboard</h2>
        <div className="contents">
        <div className="top-content">
     <div className="Top-main">
        <div className="Top-main-1">
            <div className="finance">
                <img src="https://www.pngitem.com/pimgs/m/403-4038882_transparent-financial-icon-png-transparent-finance-icon-png.png" alt="" />
                <p>Financing overview</p>
            </div>
            <span className="set-span">Last underwriting Jan,2023</span>
        </div>
        <div className="Top-main-2">
        <div className="Top-main-2-1">
            <p className="set-span">Available credit</p>
            <p>$143,258.12 <span className="set-span">/160000.000</span></p>
        </div>
        <div className="Top-main-2-2">
            <p className="set-span">Outstanding</p>
            <p>$59,869.29</p>
        </div>
        <div className="Top-main-2-3">
            <p className="set-span">Term</p>
            <p>12 months</p>
        </div>
        </div>
        </div>
        <BottomContent/>
     </div>
     <div className="top-content2">
<Main1/>
     </div>
     </div>
        </>
    )
}
export default TopContent