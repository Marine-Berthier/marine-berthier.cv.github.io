// == Import : npm
import React from 'react';

// == Import : local
import './myself.scss';

// == Composant
const Myself = ({ language, content }) => (
  <div id="myself">
    <div> <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1> </div>
    <div id="container">
      <div className="picture-div">
        <div className="picture" />
      </div>
      <div className="presentation">
        <div id="frame" className={language == 'fr' ? 'frameFR' : 'frameUK'} />
        <p className="paragraph">{language == 'fr' ? content.fr.content : content.ang.content}</p>


      </div>
    </div>
  </div>
);

// == Export
export default Myself;
