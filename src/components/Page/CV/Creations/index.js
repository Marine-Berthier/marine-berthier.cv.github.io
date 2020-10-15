// == Import : npm
import React from 'react';
import { FaGithub, FaBaby, FaHome } from 'react-icons/fa';
import { GiSpade, GiHourglass, GiCardPickup } from 'react-icons/gi';
import Fade from 'react-reveal/Fade';

// == Import : local
import './creations.scss';

import imageDark from './dark.png';
import imagePale from './pale.png';
import imagePaper from './paper.jpg';
import imageSite from './site-CL.png';
import imgaeSiteMayan from './site-Maya.png';
import imgaeSiteMemory from './memory.png';
import imgaeSiteMM from './maison-mer.png';
import imageTape from './tape.png';

// == Composant
const Creations = ({ language, content, mode }) => (
  <div id="creations">
    <div> <h1>{language === 'fr' ? content.fr.title : content.ang.title}</h1> </div>
    <div id="container" className="crea">

      <Fade>
        <div id="website-list">
          <div className="website-item">
            <a className="website-link" href="https://www.laverriere-christian.com/"><img src={imageSite} alt="screenshot website" />

              {language === 'fr' ? <p>Site Vitrine (React) pour un artisan <GiSpade size="1.5em" /></p> : <p>Website (React) for a small business <GiSpade size="1.5em" /></p>}
            </a>
          </div>

          <div className="website-item">
            <a className="website-link" href="https://mayan-gender-chart.netlify.app/"><img src={imgaeSiteMayan} alt="screenshot website" />

              {language === 'fr' ? <p>Application JS basée sur le calendrier Maya <FaBaby size="1.5em" /></p> : <p>JS application based on the Mayan gender chart <FaBaby size="1.5em" /></p>}
            </a>
          </div>

          <div className="website-item">
            <a className="website-link" href="https://music-memory-g.netlify.app//"><img src={imgaeSiteMemory} alt="screenshot website" />

              {language === 'fr' ? <p> Jeu du Memory fait avec React <GiCardPickup size="1.5em" /></p> : <p>Memory Game made with React <GiCardPickup size="1.5em" /></p>}
            </a>
          </div>

          <div className="website-item">
            <a className="website-link" href="https://maisonmer-immobilier.fr/"><img src={imgaeSiteMM} alt="screenshot website" />

              {language === 'fr' ? <><p className="subtitle-creation"> Site réalisé pour une agence immobilière <FaHome size="1.5em" /></p><p>Wordpress - Thème créé par mes soins</p></> : <><p className="subtitle-creation">Website for a real estate agency <FaHome size="1.5em" /></p><p>Wordpress - Handmade Theme</p></>}
            </a>
          </div>

          <div className="website-item">
            {mode === true ? <img className="img-dot" src={imageDark} alt="dot dot dot" /> : <img className="img-dot" src={imagePale} alt="dot dot dot" />}

            {language === 'fr' ? <p>Du nouveau très bientôt <GiHourglass size="1.5em" /></p> : <p>More to come very soon <GiHourglass size="1.5em" /></p>}

          </div>

        </div>
      </Fade>
      <div className="github">

        {language === 'fr' ? content.fr.content : content.ang.content}  <a href="https://github.com/Marine-Berthier"><div className="icon"> <FaGithub className="git" size="2.6em" /> </div> </a>
      </div>
      <img className="tape" src={imageTape} />
    </div>
  </div>
);

// == Export
export default Creations;
