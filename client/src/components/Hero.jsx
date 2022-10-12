import React from 'react';
import people from '../assets/people.png'
import ai from '../assets/ai.png';
import hexa from '../assets/bg.svg';
import './hero.css';

const Hero = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text" >Step into the Virtual World</h1>
      <p>Begin your crypto journey with Blockspirit,learn , trade , and analyze
      </p>
      <div>
        
        <div className='my-4 py-4 px-7 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
       <a href='https://blockspirit-market.vercel.app/' type='button'>Get Started</a>
        </div>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} alt = "people" />
        <p>Join our weekly Market Research Letters</p>
      </div> */}
    </div>

    <div className="gpt3__header-image   ">
      <img src={hexa} alt = "polygon"/>
    </div>
  </div>
);

export default Hero;