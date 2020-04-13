// == Import : npm
import React from 'react';
import { CSSTransition } from 'react-transition-group';


// == Import : local
import './app.scss';

// = Import : Components
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
    this.state = {
      lang: 'fr',
      appearHome: true,
      button: false,
      darkMode: false,
    };
  }


  changeLang = (value) => {
    this.setState({
      lang: value,
    });
  }

  changeLangWelcome = (value) => {
    this.setState({
      lang: value,
    });
  }

  changeMode = () => {
    if (this.state.darkMode == false) {
      console.log('dark:true');
      this.setState({
        darkMode: true,
      });
    }
    else {
      console.log('dark:false');
      this.setState({
        darkMode: false,
      });
    }
  }

  componentDidMount() {
    // console.log('cDM');
    // on ajoute un écouteur de l'événement scroll, quand cet évenement arrive on appelle handleScroll
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // on arrête d'écouter l'événement quand le composant est détruit
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const yOfButtonUp = this.button.current.getBoundingClientRect().y;
    console.log(yOfButtonUp);
    if (yOfButtonUp < -941) {
      this.setState({
        button: true,
      });
    }
    else if (yOfButtonUp > -941) {
      this.setState({
        button: false,
      });
    }
  }


  render() {
    const {
      lang,
      appearHome,
      button,
      darkMode,
    } = this.state;

    return (
      <CSSTransition
        in={appearHome}
        appear
        timeout={1000}
        classNames="fade"
      >
        <div ref={this.button} className={darkMode ? 'app-dark' : 'app'}>
          <Header changeLang={this.changeLang} changeMode={this.changeMode} />
          <Page id="single-page" changeLangWelcome={this.changeLangWelcome} language={lang} />
          <Footer button={button} />
        </div>
      </CSSTransition>
    );
  }
}


// == Export
export default App;
