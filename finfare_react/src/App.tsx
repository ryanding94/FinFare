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
      // meals:[{
      //   endTime: "12:30",
      //   id: 0,
      //   location: "1",
      //   startTime: "12:00"
      // }],
      meals: [],
      name: "Shelby Blue",
      office: "1",
      page: 0,
    }
  }  
  public renderSelectedPage = () => {
    if (this.state.page === 0) {
      // Homepage
      // Todo: iterate through array and show all meals
      if (this.state.meals.length === 0) {
        return <div className="container"><h2 className="pt-5">You have no meals scheduled!</h2></div>
      } else {
        return <MealCard meal={this.state.meals[0]}/>
      }
      // for (const eachMeal of this.state.meals) {
      //   return <MealCard meal={eachMeal} />
      // }
      // return <MealCard meal={this.state.meals[0]}/>
      return <div>that's it</div>
    } else if (this.state.page === 1) {
      // Profile
      return <Profile name={this.state.name} office={this.state.office} image={this.state.image} onNewName={this.onUpdateName} onNewOffice={this.onUpdateOffice}/>
    } else {
      // Add meal
      const newMeal: IMeal={
        endTime: "0",
        id: this.state.meals.length, 
        location: this.state.office,
        startTime: "0",
      };
      return <MealUpdate meal={newMeal} onNewStartTime={this.onUpdateStart} onNewEndTime={this.onUpdateEnd} onNewLocation={this.onUpdateLoc}/>
    }
  }
  public onSelectPage = (newPage:number) => { 
    this.setState({page: newPage});
  }
  public onUpdateName = (newName:string) => {
    this.setState({name: newName}); 
  }
  public onUpdateOffice = (newOffice:string) => {
    this.setState({office: newOffice}); 
  }
  // I really don't like the following 3 but idk how else to do it
  public onUpdateStart = (newTime:string, meal:IMeal) => {
    const newMeals = [...this.state.meals]; 
    const newMeal = {...newMeals[meal.id], startTime: newTime}; 
    newMeals[meal.id] = newMeal; 
    this.setState({meals: newMeals}); 
  }
  public onUpdateEnd = (newTime:string, meal:IMeal) => {
    const newMeals = [...this.state.meals]; 
    const newMeal = {...newMeals[meal.id], endTime: newTime}; 
    newMeals[meal.id] = newMeal;
    this.setState({meals: newMeals});
  }
  public onUpdateLoc = (newLoc:string, meal:IMeal) => {
    const newMeals = [...this.state.meals]; 
    const newMeal = {...newMeals[meal.id], location: newLoc}; 
    newMeals[meal.id] = newMeal;
    this.setState({meals: newMeals});
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
