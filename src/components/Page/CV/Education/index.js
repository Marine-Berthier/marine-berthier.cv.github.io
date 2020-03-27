// == Import : npm
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { AiOutlineDown } from 'react-icons/ai';

// == Import : local
import './education.scss';

// == Composant
const Education = ({ language, content }) => (
  <div id="education">
    <h1>{language == 'fr' ? content.fr.title : content.ang.title}</h1>
    <div className="education-list">
      <div className="education-bloc"> <h2> {language == 'fr' ? content.fr.content.highlight.name : content.ang.content.highlight.name} </h2>  <span>{language == 'fr' ? content.fr.content.highlight.date : content.ang.content.highlight.date} </span>
        <p> {language == 'fr' ? content.fr.content.highlight.details : content.ang.content.highlight.details}
          <ul className="list">
            {language == 'fr' ? (content.fr.content.highlight.list.map((line, i) => (
              <li key={i}>{line.item}</li>
            ))) : (content.ang.content.highlight.list.map((line, i) => (
              <li key={i}>{line.item}</li>
            )))}
          </ul>
        </p>
      </div>
      <Accordion>
        <Card id="accordion-education">
          <Card.Header className="card-header">
            <Accordion.Toggle as={Button} variant="link" block className="accordion-button" eventKey="0">
              <span className="title"> {language == 'fr' ? 'Plus de diplômes' : 'More diplomas'} <AiOutlineDown /></span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse id="accordion_collapse" eventKey="0">
            <Card.Body>
              {language == 'fr' ? (content.fr.content.more.map((ed, i) => (
                <div className="education-bloc" key={i}> <h2> {ed.name} </h2> <span>{ed.date}</span>
                  <p> {ed.details}
                  </p>
                </div>
              ))) : (content.ang.content.more.map((ed, i) => (
                <div className="education-bloc" key={i}> <h2> {ed.name} </h2> <span>{ed.date}</span>
                  <p> {ed.details}
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

// == Export
export default Education;

/*
const isAccordionCollapsed = (id) => {
    if (document.getElementById(id).classList.contains('show')) {
      console.log('true');
      return true;
    } else {
      console.log('true');
      return false;
    }
  }

  const isItCollapsed = isAccordionCollapsed('accordion_collapse');
  console.log(isItCollapsed);
*/
