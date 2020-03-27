// == Import : npm
import React from 'react';
import Reveal from 'react-reveal/Reveal';


// == Import : local
import './skills.scss';

// == Import Data
import skills from './data.json';

// == Composant
const Skills = ({ language, content }) => (
  <div id="skills">
    <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1>
    <div id="skills-bloc">
      <div id="skills-list">

        {skills.map((skill, i) => (
          <div className="bloc-skill" key={i}>
            <h2>{skill.skill}</h2>
            <div className="bloc">
              <Reveal effect="animation">
                <div className="gauge" style={{ width: `${skill.level}%` }} />
              </Reveal>
            </div>
          </div>
        ))}

      </div>
      <div className="description-skills">
        <p>{language == 'fr' ? content.fr.content : content.ang.content}</p>
      </div>
    </div>
  </div>
);

// == Export
export default Skills;
