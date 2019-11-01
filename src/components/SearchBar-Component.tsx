import * as React from 'react';

import '../styles/searchbar-Styles.css';

const SearchBarComponent = () => (
  <div className="SearchContainer">
    <input className="input" placeholder="Search a location..."/>
    {/* <div class="bp3-icon-search"></div> */}
  </div>
);

export default SearchBarComponent;