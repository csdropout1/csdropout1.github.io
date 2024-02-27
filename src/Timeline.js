import React, { useState } from 'react';
import Experience from './Experience';
import './Timeline.css'; // Import the CSS file

const Timeline = ({ experiences }) => {
    const [filter, setFilter] = useState('');

    const filteredExperiences = experiences.filter(
        exp => exp.type.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="timeline">
            <div className='search'>
                <input
                    className='input'
                    type="text"
                    placeholder="Filter by type"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
                <p> Search Keywords: [Education, CS, Certificate, Events, Other] </p>
            </div>
            {filteredExperiences.map((exp, index) => (
                <Experience key={index} {...exp} />
            ))}
        </div>
    );
};

export default Timeline;
