import React, { useState } from 'react';
import './calculator.css'
import emiimage from './images/emi-cal.jpg'

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(508000); // Initial loan amount
  const [duration, setDuration] = useState(5); // Default loan duration (5 years)
  const interestRate = 14.5; // Fixed interest rate

  // EMI Calculation Formula
  const calculateEMI = (loanAmount, duration) => {
    const rate = interestRate / (12 * 100); // Monthly interest rate
    const n = duration * 12; // Number of months
    return (
      (loanAmount * rate * Math.pow(1 + rate, n)) /
      (Math.pow(1 + rate, n) - 1)
    ).toFixed(0);
  };

  const emi = calculateEMI(loanAmount, duration);

  return (
    <div className="emi-calculator">
        <div className="emi-head">
            <h2>EMI Calculator</h2>
            <p>Avali upto 100% of the car value in finance at attraactive interest rates</p>
        </div>
        <div className="emi-body">
        <div className="left">
        <div className="slider-amm">
            <h2>Loan Amount</h2> <button><h2>₹{(loanAmount / 100000).toFixed(2)} Lakh</h2></button>
        </div>
        <div className="loan-slider">
            <input
          type="range"
                min="0"
                max="508000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="slider"
            />
            <div className="loan-slider-amm">
            <p>₹0</p><p className="loan-value">₹{(loanAmount / 100000).toFixed(5)}</p>
        </div>
      </div>

      <div className="duration">
        <p className="duration-label"> <b>Duration</b> in years</p>
        <div className="duration-options">
          {[1, 2, 3, 4, 5].map((year) => (
            <button
              key={year}
              className={`duration-button ${duration === year ? 'active' : ''}`}
              onClick={() => setDuration(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <p>Rate of <b> Interest @ {interestRate}% </b> for {duration} Years</p>
      </div>

      <div className="emi-result">
            <p>Your Monthly EMI</p>
            <div className='emi-r1'><h3>₹{emi}</h3> <a>view Breakup</a></div>
      </div>
          <p className="emi-value">*Interest rate and loan amount offered may vary subject to customer risk profile</p>
      <button className="loan-button">Interested In Loan</button>
      <p className="emi-value-1">550+ customers availed the facility</p>
    </div>
    <div className="right">
        <div className="r-1"></div>
        <div className="r-2">
        <img src={emiimage} alt="" /></div>
    </div>
    </div>
    
    </div>
  );
};

export default EMICalculator;
