import React from 'react';
import Tuts from './Tuts';
import WorkCardData from './WorkCardData';
import "./tutsStyle.css";

const Work = () => {
  return (
    <div className='tut-container'>
        <h3 className='tut-heading'>Tutorial</h3>
        <div className='project-container'>
           {WorkCardData.map((val,ind)=>{
            return(<Tuts 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
            />)
           } )}
        </div>
    </div>
  )
}

export default Work;