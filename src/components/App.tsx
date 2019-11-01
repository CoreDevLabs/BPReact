import * as React from 'react';

import NavBarComponent from './NavBar-Component';
import SearchBarComponent from './SearchBar-Component';
import MapComponent from './Map-Component';

export interface AppProps { compiler?: string; framework?: string; }

const App = (props: AppProps) => (
  <>
    <NavBarComponent />
    <SearchBarComponent />
    <MapComponent />
  </>
);

export default App;