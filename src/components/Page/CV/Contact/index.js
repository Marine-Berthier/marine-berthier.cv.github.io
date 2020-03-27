// == Import : npm
import React from 'react';
import { FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

// == Import : local
import './contact.scss';

// == Composant
const Contact = ({ language, content }) => (
  <div id="contact">
    <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1>
    <div className="contact-div">
      <div className="contact-type">
        <div className="icon"><FaLinkedinIn size="2em" /></div>
        <a href="https://www.linkedin.com/in/marine-berthier-dev"> <div> Linkedin </div> </a>
      </div>
      <div className="contact-type">
        <div className="icon"><FaPaperPlane size="2em" /></div>
        <div> mberthier.pro@gmail.com </div>
      </div>
    </div>

  </div>

);

// == Export
export default Contact;
