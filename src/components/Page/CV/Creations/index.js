// == Import : npm
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GiSpade, GiHourglass } from 'react-icons/gi';

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

            {language === 'fr' ? <p>Site Vitrine (React) pour un artisan <GiSpade size="1.5em" /></p> : <p>Website (React) for a small business <GiSpade size="1.5em" /></p>}
          </a>
        </div>

        <div className="website-item">
          <div id="dots">...</div>

          {language === 'fr' ? <p>Du nouveau très bientôt <GiHourglass size="1.5em" /></p> : <p>More to come very soon <GiHourglass size="1.5em" /></p>}

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
