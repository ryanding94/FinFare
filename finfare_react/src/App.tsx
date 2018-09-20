import * as React from 'react';
import {MealCard} from './MealCard'; 
import {MealUpdate} from './MealUpdate';
import {NavBar} from './Navbar'; 
import {Profile} from './Profile'; 

interface IAppState{
  page: number
  // 0 is homepage
  // 1 is my profile
  // 2 is add a meal
}

class App extends React.Component<{}, IAppState> {
  constructor(props:any) {
    super(props); 
    this.state = {
      page: 0
    }
  }  
  public render() {
    return (
      // Add the Navigation Bar
      <div>
        <NavBar pageNum={this.state.page}/>
        <MealUpdate />
        <MealCard />
        <Profile />
      </div>
    );
  }
}

export default App;
