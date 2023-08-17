import React from 'react';
import './second.css';

const Second = () => {
  return (
    <div className='second'>
      <h1 className='title'>Unlimited movies, TV shows, and more</h1>
      <p className='subtitle'>Watch anywhere. Cancel anytime.</p>
      <p className='subtitle2'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="input_section">
        <input type="text" className='searchinput' placeholder='Email Address' />
        <button className='start_button'>Get Started</button>
      </div>
    </div>
  );
};

export default Second;