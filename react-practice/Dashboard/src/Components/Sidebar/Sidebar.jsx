import React from "react";
import './Sidebar.css'
import img1 from '../../assets/sidebarimg/download1.webp'
import img2 from '../../assets/sidebarimg/Home1.png'
import img3 from '../../assets/sidebarimg/anly.png'
import img4 from '../../assets/op1.jpg'
import img5 from '../../assets/op2.png'
import img6 from '../../assets/op3.png'
import img7 from '../../assets/op4.png'
import img8 from '../../assets/op5.png'
import img9 from '../../assets/op8.png'
import img13 from '../../assets/op13.jpg'
import img11 from '../../assets/op10.png'
import img12 from '../../assets/op11.png'


const Sidebar1=()=>{
    return(
        <>
        <div className="sidebar">
            <div className="side_top">
                <div className="logo">
                    <img src={img1} alt="logo"/>
                    <h2> Kital</h2>
                </div>
                <div className="side_op1">
                    <div className="side_1">
                        <img src={img2} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className="side_1">
                        <img src={img3} alt="" />
                        <p>Analytics</p>
                    </div>  
                </div>
                <div className="side_op1">
                    <h5>FINANCING</h5>
                <div className="side_1">
                        <img src={img4} alt="" />
                        <p>All transactions</p>
                    </div>
                    <div className="side_1">
                        <img src={img5} alt="" />
                        <p>New Draw</p>
                    </div>
                </div>
                <div className="side_op1">
                <h5>TOOLS</h5>
                <div className="side_1">
                        <img src={img7} alt="" />
                        <p>Churn Funnel</p>
                    </div>
                    <div className="side_1">
                        <img src={img8} alt="" />
                        <p>Saas Planner</p>
                    </div>
                    <div className="side_1">
                        <img src={img9} alt="" />
                        <p>Customer Hub</p>
                    </div>
                </div>
            </div>
            <div className="side_bottom">
                <div className="help-in">
                    <div className="help_op">
                        <img src={img9} alt="" />
                        <p>Need help?</p>
                    </div>
                    <div className="help_op1">
                        Get in touch with one of our experts or visit our FAQ
                    </div>
                </div>
                <div className="side_op1">
                    <h5>General</h5>
                <div className="side_1">
                        <img src={img4} alt="" />
                        <p>Settings</p>
                    </div>
                    <div className="side_1">
                        <img src={img5} alt="" />
                        <p>Log Out</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="sidebar">
           <div className="step1">
            <img src={img1} alt="" className="image1" />
            <p className="text1">Kital</p>
            
           </div>
           <div className="se-1">
             <div className="se1">
                <img src={img2} alt="" className="image2"/>
                <p className="text2">Dashboard</p>
             </div>
             <div className="se1">
             <img src={img3} alt="" className="image2"/>
             <p className="text2">Analytics</p>
             </div>
           </div>
            <div className="step3">
                <div className="se3">
                    <p>FINANCING</p>
                    <div className="se-1">
                    <div className="se1">
                <img src={img4} alt="" className="image2"/>
                <p className="text2">All transactions</p>
             </div>
             <div className="se1">
             <img src={img6} alt="" className="image2"/>
             <p className="text2">New Draw</p>
             </div>
                    </div>
                </div>
            </div>
            <div className="step4">
            <div className="se3">
                    <p>TOOLS</p>
                    <div className="se-1">
                    <div className="se1">
                <img src={img7} alt="" className="image2"/>
                <p className="text2">Churn Funnel</p>
             </div>
             <div className="se1">
             <img src={img8} alt="" className="image2"/>
             <p className="text2">Saas Planner</p>
             </div>
             <div className="se1">
             <img src={img9} alt="" className="image2"/>
             <p className="text2">Customer Hub</p>
             </div>
                    </div>
                </div>
            </div>
            <div className="step5"></div>
            <div className="step6">
                <div className="solo1">
                <img src={img13} alt="" className="image2" />
                <p className="text2">Need Help</p>
                </div>
                <span className="txt1">Get in touch with one of our</span>
                <span className="txt1">experts or visit our FAQ</span>
            </div>
            <div className="step7">
            <div className="se3">
                    <p>GENERAL</p>
                    <div className="se-1">
                    <div className="se1">
                <img src={img11} alt="" className="image2"/>
                <p className="text2">Settings</p>
             </div>
             <div className="se1">
             <img src={img12} alt="" className="image2"/>
             <p className="text2" >Log out</p>
             </div>
                    </div>
                </div>
            </div>

        </div> */}
        </>
    )
}
export default Sidebar1;