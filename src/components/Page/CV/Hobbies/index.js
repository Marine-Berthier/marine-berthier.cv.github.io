// == Import : npm
import React from 'react';

// == Import : local
import './hobbies.scss';
import imageCake from './image_cake.jpg';


// == Composant
const Hobbies = ({ language, content }) => (
  <div id="hobbies">
    <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1><span className="subtitle">{language == 'fr' ? content.fr.subtitle : content.ang.subtitle}</span>
    <div className="hobbies-list">

      <div className="container">
        <div className="description-hobbies"><h2>{language == 'fr' ? content.fr.content.baking.title : content.ang.content.baking.title} <img className="image" src="src/components/Page/CV/Hobbies/ice-cream.svg" /></h2><p>{language == 'fr' ? content.fr.content.baking.content : content.ang.content.baking.content}</p> </div>
        <div> <img className="picture" src={imageCake} /> </div>
      </div>

      <div className="container-trip">
        <div className="description-trip"> <h2>{language == 'fr' ? content.fr.content.travelling.title : content.ang.content.travelling.title}<img className="image" src="src/components/Page/CV/Hobbies/passport.svg" /></h2><p>{language == 'fr' ? content.fr.content.travelling.content : content.ang.content.travelling.content}</p> </div>
        <div> <img className="picture-trip" src="src/components/Page/CV/Hobbies/image_plane.jpg" /> </div>
      </div>

    </div>


  </div>
);

// == Export
export default Hobbies;
