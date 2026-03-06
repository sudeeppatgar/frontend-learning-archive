import React from "react";
import './Bottom.css';
// import ball from '../assets/ball.png'

function BottomContent(){
    return(
        <div className="bottomContent-main">
            <div className="left-bottomContent">
                <div className="left-bottomContent-1">
                    {/* <img width={25} src={ball} alt="" /> */}
                    <p>Score</p>
                </div>
                <div className="left-bottomContent-2">
                    <span className="set-span">A perfect credit score of 1,000 unclocks our best terms: 38 month term and 8% discount rate</span>
                </div>
                <div className="left-bottomContent-3">
                    <span className="small-span">To increase your score,<span className="purple">connect your integration</span></span>
                </div>
                <div className="left-bottomContent-4">
                    <div className="left-bottomContent-4-1">
                    <span className="set-span">Your score</span>
                    <p>690/1000</p>
                    </div>
                    <input type="range" />
                </div>
                <div className="left-bottomContent-5">
                    <div className="left-bottomContent-5-1">
                        <div className="left-bottomContent-5-1-1">
                            <span className="set-span">MRR</span>
                            <input className="orange" type="range" />
                             </div>
                        <div className="left-bottomContent-5-1-2">
                        <span className="set-span">Churn</span>
                        <input className="green" type="range" />
                        </div>
                        <div className="left-bottomContent-5-1-3">
                        <span className="set-span">Runway</span>
                        <input className="green" type="range" />
                        </div>
                    </div>
                    <div className="left-bottomContent-5-2">
                    <div className="left-bottomContent-5-1-1">
                            <span className="set-span">Retention</span>
                            <input className="green" type="range" />
                             </div>
                        <div className="left-bottomContent-5-1-2">
                        <span className="set-span">ACV</span>
                        <input className="orange" type="range" />
                        </div>
                        <div className="left-bottomContent-5-1-3">
                        <span className="set-span">Growth</span>
                        <input className="orange" type="range" />
                        </div>
                    </div>
                </div>
                <div className="left-bottomContent-6">
                <button className="left-bottoom-button">Improve Score</button>
                <button className="left-bottoom-button">View Metrics</button>
                </div>
            </div>
            <div className="right-bottomContent">
                <div className="right-bottomContent-1">
                    <div className="right-bottomContent-1-1">
                        <img width={20} src="https://cdn-icons-png.flaticon.com/512/2152/2152687.png" alt="" />
                        <p>Draws</p>
                    </div>
                    <div className="right-bottomContent-1-2">
                        <img width={23} src="https://img.icons8.com/ios7/200/FFFFFF/plus--v2.png" alt="" />
                        <p>New draw</p>
                    </div>
                </div>
                <div className="right-bottomContent-2">
                    <span className="set-span-2">6 active draws</span>
                </div>
                <div className="right-bottomContent-3">
                    <div className="right-bottomContent-3-1">
                        <p className="set-p">Draw 5</p>
                        <span className="set-span-2">Active</span>
                    </div>
                    <div className="right-bottomContent-3-2">
                        <span className="set-span">Outstanding</span>
                        <div className="right-bottomContent-3-2-2">
                         <p className="set-p">$12,000</p>
                         <span className="set-span">From $100,000</span>
                        </div>
                        <input type="range" />
                    </div>
                    <div className="right-bottomContent-3-3">
                        <span >Rate</span>
                        <p className="set-p">12%</p>
                    </div>
                </div>
                <div className="right-bottomContent-4">
                    <div className="right-bottomContent-4-1">
                    <p className="set-p">Draw 5</p>
                    <span className="set-span-2">Active</span>
                    </div>
                    <div className="right-bottomContent-4-2">
                    <span className="set-span">Outstanding</span>
                    <div className="right-bottomContent-3-2-2">
                         <p className="set-p">$12,000</p>
                         <span className="set-span">From $100,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BottomContent