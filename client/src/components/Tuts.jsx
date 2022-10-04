import React from 'react';
import { NavLink } from 'react-router-dom';
import "./tutsStyle.css";
import WorkCardData from './WorkCardData';

const Tuts = (props) => {
  return (
    <div className='tut-card'>
      <img src={props.imgsrc} alt="image-github repo" />
      <h2 className='tut-title'>{props.title}</h2>
      <div className='tut-details'>
        <p>{props.text}</p>
        <div className='tut-btn'>
          <a href={props.view}>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Tuts;