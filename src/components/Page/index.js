// == Import : npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


// == Import : local
import './page.scss';

// == Import : Composants
import Welcome from './Welcome';
import CV from './CV';

// == Composant
const Page = ({ language, changeLangWelcome }) => (
  <div id="page">

    <Switch>
      <Route exact path="/">
        <Welcome changeLangWelcome={changeLangWelcome} />
      </Route>
      <Route path="/cv">
        <CV lang={language} />
      </Route>
    </Switch>


  </div>
);

// == Export
export default Page;
