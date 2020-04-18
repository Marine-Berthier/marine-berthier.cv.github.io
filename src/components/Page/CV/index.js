// == Import : npm
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Slide from 'react-reveal/Slide';

// == Import : local
import './cv.scss';
import data from './content.json';

// == Import : Composants
import Myself from './Myself';
import Skills from './Skills';
import Experiences from './Experiences';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';

// == Composant
class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearCv: true,
    };
  }


  render() {
    const {
      lang,
    } = this.props;

    const {
      appearCv,
    } = this.state;


    return (
      <CSSTransition
        in={appearCv}
        appear
        timeout={800}
        classNames="fade"
      >
        <div id="CV">
          <Myself language={lang} content={data.myself} />

          <Skills language={lang} content={data.skills} />


          <div id="exp-edu">
            <Slide left>
              <Experiences language={lang} content={data.experience} />
            </Slide>
            <Slide right>
              <Education language={lang} content={data.education} />
            </Slide>
          </div>

          <Hobbies language={lang} content={data.hobbies} />
          <Contact language={lang} content={data.contact} />
        </div>
      </CSSTransition>
    );
  }
}

// == Export
export default CV;
