// == Import : npm
import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import HeadShake from 'react-reveal/HeadShake';

// == Import : local
import './footer.scss';


// == Composant
const Footer = ({ button }) => {
  const location = useLocation();
  return (
    <>
      <div id="footer">
        { ((location.pathname.indexOf('cv') !== -1) && (button === true))
&& (
  <HeadShake><div id="up-button"><Link className="NavLink" to="cv#myself"><FiArrowUpCircle size="3em" /></Link></div></HeadShake>
)}
        <div><p>© Marine Berthier - 2020 | Tous droits réservés.</p> </div>
      </div>
    </>
  );
};

// == Export
export default Footer;
