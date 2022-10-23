import React from 'react';
import people from '../assets/people.png'
import ai from '../assets/ai.png';
import './market.css';

const MarketPlace = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Dive into the Market</h1>
      <p>Blockspirit Community provides well versed learning and a virtual expeirence by not just providing a virtual platform but also a full fledged market analysis which 
        almost have all information you need to get started in crypto currency.
      </p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" className='email'  />
        <div className='glow-on-hover'>
       <a href='https://blockspirit-market.vercel.app/' type='button'>Get Started</a>
        </div>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt = "people" />
        <p>Join our weekly Market Research Letters</p>
      </div>
    </div>

    <div className="gpt3__header-image animate-pulse transition-all">
      <img src={ai} alt = "ai"/>
    </div>
  </div>
);

export default MarketPlace;