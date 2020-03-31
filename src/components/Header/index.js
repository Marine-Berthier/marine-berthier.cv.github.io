// == Import : npm
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


// == Import : local
import './header.scss';

// == Composant
const Header = ({ changeLang }) => {
  const onChangeLangUK = () => {
    changeLang('eng');
  };

  const onChangeLangFR = () => {
    changeLang('fr');
  };

  return (
    <div id="header">
      <div className="fake" />
      <NavLink className="NavLink" to="/"><div className="title">
        <h1>Marine Berthier</h1>
        <h2> Web Developer</h2>
                                          </div>
      </NavLink>

      <div className="menu">
        <Dropdown>
          <Dropdown.Toggle  variant="link" id="dropdown-basic">
            <GiHamburgerMenu id="hamburger-menu"size="1.5em" />
          </Dropdown.Toggle>

          <Dropdown.Menu alignLeft className="dropdown-menu">
            <NavLink onClick={onChangeLangFR} className="NavLink" to="cv"><Dropdown.Item className="dropdown-item" href="#/cv">French</Dropdown.Item></NavLink>
           <NavLink onClick={onChangeLangUK} className="NavLink" to="cv"><Dropdown.Item className="dropdown-item" href="#/cv">English</Dropdown.Item></NavLink>
            <Link className="NavLink" to="cv#contact"><Dropdown.Item className="dropdown-item" href="#/contact">Contact</Dropdown.Item></Link>
            <Dropdown.Item className="dropdown-item" href="PDF/CV_ENG_Marine_Berthier.pdf"><a href="./src/PDF/CV_ENG_Marine_Berthier.pdf"  download="CV_Marine_Berthier_English"> Download my CV </a></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

// == Export
export default Header;