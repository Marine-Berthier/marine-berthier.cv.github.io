// == Import : npm
import React from 'react';
import Particles from 'react-particles-js';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// == Import : local
import './welcome.scss';

// == Composant
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearWelcome: true,
    };


    this.onChangeLangUK = () => {
      changeLangWelcome('eng');
    };

    this.onChangeLangFR = () => {
      changeLangWelcome('fr');
    };

    const {
      changeLangWelcome,
    } = this.props;
  }

  

  render() {
    

    const {
      appearWelcome,
    } = this.state;

    return (
      <CSSTransition
        in={appearWelcome}
        appear
        timeout={800}
        classNames="fade"
      >
        <div id="container">
          <div id="particles">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 100,
                  },
                  color: {
                    value: '#351D31',
                  },
                  size: {
                    value: 3,
                  },
                  line_linked: {
                    color: '#351D31',
                    shadow: {
                      enable: false,
                    },
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse',
                    },
                  },
                },
              }}
            />
          </div>


          <div className="buttons">
            <span className="button_english">
              <strong className="button"> {'<'} </strong>
              <NavLink onClick={this.onChangeLangUK} className="NavLink" to="cv"><button variant="link">
                <span className="button_case english">English</span>
              </button>
              </NavLink>
              <strong className="button button_english"> /> </strong>
            </span>

            <span className="button_french">
              <strong className="button"> {'<'} </strong>
              <NavLink onClick={this.onChangeLangFR} className="NavLink" to="cv"><button variant="link">
                <span className="button_case french">Français </span>
              </button>
              </NavLink>
              <strong className="button button_french"> /> </strong>
            </span>
          </div>
        </div>
      </CSSTransition>


    );
  }
}

// == Export
export default Welcome;
