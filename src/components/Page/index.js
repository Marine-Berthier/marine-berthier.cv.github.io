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
const Page = ({ language, changeLangWelcome, mode }) => (
  <div id="page">

    <Switch>
      <Route exact path="/">
        <Welcome changeLangWelcome={changeLangWelcome} mode={mode} />
      </Route>
      <Route path="/cv">
        <CV lang={language} mode={mode} />
      </Route>
    </Switch>

  </div>
);

// == Export
export default Page;
