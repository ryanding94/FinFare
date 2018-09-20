import * as React from 'react';
import {IMeal} from './aMeal';
import {MealCard} from './MealCard'; 
import {MealUpdate} from './MealUpdate';
import {NavBar} from './Navbar'; 
import {Profile} from './Profile';

interface IAppState{
  page: number
  // 0 is homepage
  // 1 is my profile
  // 2 is add a meal
  name: string;
  office: string;
  image: string; 
  meals: IMeal[]
}

class App extends React.Component<{}, IAppState> {
  constructor(props:any) {
    super(props); 
    this.state = {
      image: "https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x", 
      meals:[{
        endTime: "12:30",
        location: "1",
        startTime: "12:00"
      }],
      name: "Shelby Blue",
      office: "1",
      page: 0,
    }
  }  
  public renderSelectedPage = () => {
    if (this.state.page === 0) {
      // Homepage
      return <MealCard meal={this.state.meals[0]}/>
    } else if (this.state.page === 1) {
      // Profile
      return <Profile name={this.state.name} office={this.state.office} image={this.state.image} onNewName={this.onUpdateName} onNewOffice={this.onUpdateOffice}/>
    } else {
      // Add meal
      const newMeal: IMeal={
        endTime: "0",
        location: this.state.office,
        startTime: "0",
      };
      return <MealUpdate meal={newMeal} />
    }
  }
  public onSelectPage = (newPage:number) => { 
    this.setState({page: newPage})
  }
  public onUpdateName = (newName:string) => {
    this.setState({name: newName})
  }
  public onUpdateOffice = (newOffice:string) => {
    this.setState({office: newOffice})
  }
  public render() {
    return (
      // Add the Navigation Bar
      <div>
        <NavBar pageNum={this.state.page} onSelected={this.onSelectPage}/>
        {this.renderSelectedPage()}
      </div>
    );
  }
}

export default App;
