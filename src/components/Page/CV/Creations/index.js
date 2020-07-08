// == Import : npm
import React from 'react';
import { FaGithub } from 'react-icons/fa';

// == Import : local
import './creations.scss';

// == Composant
const Creations = ({ language, content }) => (
  <div id="creations">
    <div> <h1>{language === 'fr' ? content.fr.title : content.ang.title}</h1> </div>
    <div id="container" className="crea">

      <div id="website-list">
        <div className="website-item">
          <a className="website-link" href="https://www.laverriere-christian.com/"><img src="src/components/Page/CV/Creations/site-CL.png" alt="screenshot website" />

            <p>Site Vitrine pour un artisan</p>
          </a>
        </div>

      </div>

      <div className="github">
        <p>{language === 'fr' ? content.fr.content : content.ang.content}  <a href="https://github.com/Marine-Berthier"><div className="icon"> <FaGithub className="git" size="2.6em" /> </div> </a></p>
      </div>
    </div>
  </div>
);

// == Export
export default Creations;
