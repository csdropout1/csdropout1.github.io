import React from 'react';
import './SkillsPanel.css';

const SkillsPanel = ({ isOpen, onClose }) => {
    return (
        <div className={`skills-panel ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={onClose}>Close</button>
            <div className='text'>
                <h1>Relevant Skills</h1>
                <ul>
                    <li><h3>Programming Languages</h3>
                        <p>C | C# | C++ | JavaScript | Go | Python | R | Java</p>
                    </li>
                    <li><h3>Frameworks & Tools</h3>
                        <p>ReactJS, PyQt, PyAutoGUI, Pandas, Numpy, Scikit-Learn, AWS, Unity, Unreal-Engine, Jira, Git, Stable-Diffusion, Unix/Linux </p>
                    </li>
                    <li> <h3>Other</h3>
                        <p>Video Editing Lightroom, AfterEffects, Photoshop, Overleaf, Microsoft Office</p>
                    </li>
                    {/* ADD MORE */}
                </ul>
            </div>
        </div>
    );
};

export default SkillsPanel;
