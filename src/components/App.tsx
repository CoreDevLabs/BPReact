import * as React from 'react';

//Imported Components
import NavBarComponent from './NavBar-Component';

export interface AppProps { compiler?: string; framework?: string; }

const App = (props: AppProps) => (
  <>
    <NavBarComponent />
  </>
);

export default App;