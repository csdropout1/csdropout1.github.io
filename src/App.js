import React, { useState } from 'react';
import Timeline from './Timeline';
import SkillsPanel from './SkillsPanel';
import './App.css'

const experiences = [
  { type: 'Education', title: 'Emory University', date: '2020-2024', description: 'B.S. Computer Science: Systems Programming, Data Structures and Algorithms, Databases, Machine Learning, Computer Architecture, NLP, Data Mining, Computer Security' },
  { type: 'Other', title: 'Emory University: SAAC Facility Supervisor', date: 'Apr 2021 - Apr 2024', description: 'Description ...' },
  { type: 'Other', title: 'Emory University: Orientation Leader', date: 'May 2023 - Aug 2023', description: 'Description ...' },
  { type: 'Other', title: 'Emory University: Residential Life Operations', date: 'May 2022 - Aug 2022', description: 'Description ...' },
  { type: 'CS', title: 'Emory University: Undergraduate Researcher', date: 'Jun 2021 - Jan 2022', description: 'Description ...' },
  { type: 'Education', title: 'Yonsei University: Summer Exchange Program', date: 'May 2023 - Aug 2023', description: 'Description ...' },
  { type: 'Events', title: 'EGHI + GeorgiaTech Hackathon', date: 'Spring 2023', description: '2nd Prize award for designing a telehealth data analytics tool for healthcare professionals to track patient responses during check up.' },
  { type: 'Events', title: 'EGHI + GeorgiaTech Hackathon', date: 'Fall 2023', description: 'Won top 5 award for designing a home energy monitoring system that uses data analytics to optimize urban energy consumption.' },

  
];

const App = () => {
  const [isSkillsPanelOpen, setIsSkillsPanelOpen] = useState(false);

  const toggleSkillsPanel = () => {
      setIsSkillsPanelOpen(!isSkillsPanelOpen);
  };

    return (
        <div className='all'>
            <header className='Title'>
                <h1>Microl Chen</h1>
                <h2>This website is a work in progress</h2>
                <p> +1(404) 449-9162 ⋄ Irvine, CA </p>
                <p> microlchen0616@gmail.com ⋄ https://www.linkedin.com/in/microl-chen/ </p>
                <p> https://www.instagram.com/microl.chen ⋄ https://github.com/csdropout1/</p>
            </header>
            <button className="skills-button" onClick={toggleSkillsPanel}>Tech-Stack</button>
            <SkillsPanel isOpen={isSkillsPanelOpen} onClose={toggleSkillsPanel} />
            <main>
                <Timeline experiences={experiences} />
            </main>
        </div>
    );
};

export default App;
