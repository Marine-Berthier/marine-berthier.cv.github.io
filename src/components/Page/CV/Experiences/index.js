// == Import : npm
import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

// == Import : local
import './experiences.scss';

// == Composant
class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: true,
    };
  }

  clickOnAccordion = () => {
    if (this.state.more == true) {
      console.log('false');
      this.setState({
        more: false,
      });
    }
    else {
      console.log('true');
      this.setState({
        more: true,
      });
    }
  };

  render() {
    const {
      language, content,
    } = this.props;

    const {
      more,
    } = this.state;

    return (
      <div id="experiences">
        <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1>
        <div className="experience-list">
          <div className="experience experience-1"> <h2>{language == 'fr' ? content.fr.content.highlight.name : content.ang.content.highlight.name}</h2> <span>{language == 'fr' ? content.fr.content.highlight.date : content.ang.content.highlight.date}</span>
            <p>{language == 'fr' ? content.fr.content.highlight.details : content.ang.content.highlight.details}
            </p>
          </div>
          <Accordion>
            <Card id="accordion-experience">
              <Card.Header className="card-header">
                <Accordion.Toggle as={Button} onClick={this.clickOnAccordion} variant="link" block className="accordion-button" eventKey="0">
                  {(language == 'fr' && more == true) && <span className="title"> Plus d'expériences <AiOutlineDown /></span>}
                  {(language == 'fr' && more == false) && <span className="title"> Moins d'expériences <AiOutlineUp /></span>}
                  {(language == 'eng' && more == true) && <span className="title"> More experience <AiOutlineDown /></span>}
                  {(language == 'eng' && more == false) && <span className="title"> Less experience <AiOutlineUp /></span>}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {language == 'fr' ? (content.fr.content.more.map((exp, i) => (
                    <div className="experience" key={i}> <h2> {exp.name} </h2> <span>{exp.date}</span>
                      <p> {exp.details}
                      </p>
                    </div>
                  ))) : (content.ang.content.more.map((exp, i) => (
                    <div className="experience" key={i}> <h2> {exp.name} </h2> <span>{exp.date}</span>
                      <p> {exp.details}
                      </p>
                    </div>
                  ))) }

                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>
      </div>
    );
  }
}

// == Export
export default Experiences;
