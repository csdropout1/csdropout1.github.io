import React from 'react';
import './Experience.css'

const Experience = ({ title, date, description }) => {
    return (
        <div className="event">
            <h3 className='Title'>{title}</h3>
            <p className='Date'>{date}</p>
            <p className='Description'>{description}</p>
        </div>
    );
};

export default Experience;
