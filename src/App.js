import React from 'react';

import './App.css';
import './global.css';
import './footer.css';
import './header.css';
import './main.css';

import headerlogo from './images/logo.svg';

function App() {
  return (
    <div className="App">

      <div className="Header">
        <div className="Header-image">
          <img src={headerlogo} alt="logo loopstudios"></img>
        </div>

        <div className="Header-menu">
          <span>About</span>
          <span>Careers</span>
          <span>Events</span>
          <span>Products</span>
          <span>Support</span>
        </div>

      </div>

      <div className="Header-background">
        <div className="Header-bgText">Immersive <br/> experiences that <br/> deliver</div>
      </div>

      <div className="main">
        <div className="main-firstbox">
          The leader in interactive VR

          Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.
        </div>

        <div className="main-sections">
          <div className="main-sections_title">
            Our creations

            See all
          </div>

          <div className="main-sections_creations">
            <div className="main-sections_creations options">
              Deep earth
            </div>
            <div className="main-sections_creations options">
              Night arcade
            </div>
            <div className="main-sections_creations options">
              Soccer team VR
            </div>
            <div className="main-sections_creations options">
              The grid
            </div>
            <div className="main-sections_creations options">
              From up above VR
            </div>
            <div className="main-sections_creations options">
              Pocket borealis
            </div>
            <div className="main-sections_creations options">
              The curiosity
            </div>
            <div className="main-sections_creations options">
              Make it fisheye
            </div>
          </div>

        </div>
      </div>

      <div className="footer">
        About
        Careers
        Events
        Products
        Support

        © 2021 Loopstudios. All rights reserved.
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>

    </div>
  );
}

export default App;
