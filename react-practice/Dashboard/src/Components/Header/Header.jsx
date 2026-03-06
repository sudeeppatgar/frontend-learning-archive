import React from "react";
import './Header.css';
const Dashboard= () =>{
    return(
        <div className="header">
            <div className="sub1">
                <div className="find">
                    <div className="box1">
                        <img src="https://cdn-icons-png.flaticon.com/128/2330/2330104.png" alt="" />
                    </div>
                <input type="search" placeholder=" Search or type a command" />
                </div>
            </div>
            <div className="sub2">
                <div className="box2"><img src="https://cdn-icons-png.flaticon.com/128/16453/16453481.png" alt="bell" className="bell" /></div>
                <div className="box3"><img src="https://cdn-icons-png.flaticon.com/128/14916/14916748.png" alt="" className="bell1" /></div>
                <div className="text">
                <span><b>Izuma Media</b></span>
                <p>sudeep</p>
                </div>
            </div>

        </div>
    );
}
export default Dashboard;