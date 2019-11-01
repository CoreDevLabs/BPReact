import * as React from 'react';

import '../styles/navbar-Styles.css';

const NavBarComponent = () => (
  
  <>
    <div className="bp3-navbar">
      <div className="Container">
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading text">WeatherDART</div>
        </div>

        <div className="bp3-navbar-group bp3-align-right">
          <button className="bp3-button bp3-minimal bp3-icon-person">Profile</button>
          <button className="bp3-button bp3-minimal bp3-icon-log-out">Logout</button>
          <button className="bp3-button bp3-minimal bp3-icon-cog">Setting</button>
        </div>
      </div>
    </div>
  </>

);

export default NavBarComponent;