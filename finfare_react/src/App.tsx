import * as React from 'react';
import {NavBar} from './Navbar'; 
import {MealUpdate} from './MealUpdate';

class App extends React.Component {
  public render() {
    return (
      // Add the Navigation Bar
      <div>
      <MealUpdate />
      <NavBar />
      </div>
    );
  }
}

export default App;
