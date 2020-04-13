// == Import : npm
import React from 'react';

// == Import : local
import './switch_button.scss';


// == Composant
const Switch_Button = () => (
  <div className="button-switch">
    <input type="checkbox" id="switch-orange" className="switch" />
    <label htmlFor="switch-orange" className="lbl-off">Dark</label>
    <label htmlFor="switch-orange" className="lbl-on">Light</label>
  </div>
);

// == Export
export default Switch_Button;
