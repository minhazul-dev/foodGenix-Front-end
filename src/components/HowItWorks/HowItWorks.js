import React from 'react';
import './HowItWorks.css'
const HowItWorks = () => {
  return (
    <div className="howitworkswrapper">
      <div className="header">

        <h1>How It Works</h1>

      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>On the way to receive food</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
        </div>
        <div className="box red">
          <h2>Find Organization near you</h2>
          <p>Scans our talent network to create the optimal team for your project</p>
          <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
        </div>
        <div className="box box-down blue">
          <h2>Place Request </h2>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Request Accepted </h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;