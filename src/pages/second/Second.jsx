import React from 'react';
import './second.css';
import image1 from '../../assets/feature-1.png'
const Second = () => {
  return (
    <div className="application">
        <div className='second'>
          <div className="blackbg">
          <h1 className='title'>Unlimited movies, TV shows, and more</h1>
          <p className='subtitle'>Watch anywhere. Cancel anytime.</p>
          <p className='subtitle2'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input_section">
            <input type="text" className='searchinput' placeholder='Email Address' />
            <button className='start_button'>Get Started</button>
            </div>
          </div>
        </div>

      <div class="section-div">
          <div class="section-div__left">
            <div class="enjoy-heading">
              <h1>
                Enjoy on your TV
              </h1>
            </div>
            <div class="smart-tv-content">
              <pre class="smart_tv">
                Watch on Smart TVs, Playstation, Xbox,
                Chromecast, Apple TV, Blu-ray players,
                and more.
              </pre>
            </div>
          </div>

          <div class="image-container">
            <img src={image1} alt="" class="tv-image" />
          </div>
      </div>

    </div>
  );
};

export default Second;