// == Import : npm
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GiSpade, GiHourglass } from 'react-icons/gi';
import Fade from 'react-reveal/Fade';

// == Import : local
import './creations.scss';

// == Composant
const Creations = ({ language, content, mode }) => (
  <div id="creations">
    <div> <h1>{language === 'fr' ? content.fr.title : content.ang.title}</h1> </div>
    <div id="container" className="crea">

      <Fade top>
        <div id="website-list">
          <div className="website-item">
            <a className="website-link" href="https://www.laverriere-christian.com/"><img src="src/components/Page/CV/Creations/site-CL.png" alt="screenshot website" />

              {language === 'fr' ? <p>Site Vitrine (React) pour un artisan <GiSpade size="1.5em" /></p> : <p>Website (React) for a small business <GiSpade size="1.5em" /></p>}
            </a>
          </div>

          <div className="website-item">
            {mode === true ? <img className="img-dot" src="src/components/Page/CV/Creations/dark.png" alt="dot dot dot" /> : <img className="img-dot" src="src/components/Page/CV/Creations/pale.png" alt="dot dot dot" />}

            {language === 'fr' ? <p>Du nouveau très bientôt <GiHourglass size="1.5em" /></p> : <p>More to come very soon <GiHourglass size="1.5em" /></p>}

          </div>
        </div>
      </Fade>
      <div className="github">

        {language === 'fr' ? content.fr.content : content.ang.content}  <a href="https://github.com/Marine-Berthier"><div className="icon"> <FaGithub className="git" size="2.6em" /> </div> </a>
      </div>
      <img className="tape" src="src/components/Page/CV/Creations/tape.png" />
    </div>
  </div>
);

// == Export
export default Creations;
