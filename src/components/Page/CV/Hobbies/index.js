// == Import : npm
import React from 'react';

// == Import : local
import './hobbies.scss';


// == Composant
const Hobbies = ({ language, content }) => (
  <div id="hobbies">
    <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1><span>{language == 'fr' ? content.fr.subtitle : content.ang.subtitle}</span>
    <div className="hobbies-list">

      <div className="container">
        <div className="description-hobbies"> <h2>{language == 'fr' ? content.fr.content.baking.title : content.ang.content.baking.title}</h2>{language == 'fr' ? content.fr.content.baking.content : content.ang.content.baking.content} </div>
        <div> <img className="picture" src="src/components/Page/CV/Hobbies/image_cake.jpg" /> </div>
      </div>

      <div className="container-trip">
        <div className="description-trip"> <h2>{language == 'fr' ? content.fr.content.travelling.title : content.ang.content.travelling.title}</h2>{language == 'fr' ? content.fr.content.travelling.content : content.ang.content.travelling.content} </div>
        <div> <img className="picture-trip" src="src/components/Page/CV/Hobbies/image_plane.jpg" /> </div>
      </div>

    </div>


  </div>
);

// == Export
export default Hobbies;