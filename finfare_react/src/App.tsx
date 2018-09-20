import * as React from 'react';
// import * as ReactDOM from 'react-dom'; 
// import {BrowserRouter} from 'react-router-dom'; 
import {MealCard} from './MealCard'; 
import {MealUpdate} from './MealUpdate';
import {NavBar} from './Navbar'; 
import {Profile} from './Profile';
// import {Route} from 'react-router';  

// ReactDOM.render(
//   <BrowserRouter>
//     <div>
//       <Route path="/Profile" component={Profile}/>
//       <Route path="/Home" component={MealCard}/>
//       <Route path="/Meal" component={MealUpdate}/>
//     </div>
//   </BrowserRouter>
// );

interface IAppState{
  page: number
  // 0 is homepage
  // 1 is my profile
  // 2 is add a meal
  name: string;
  office: string;
  image: string; 
}

class App extends React.Component<{}, IAppState> {
  constructor(props:any) {
    super(props); 
    this.state = {
      image: "https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x", 
      name: "Shelby Blue",
      office: "1",
      page: 0,
    }
  }  
  public renderSelectedPage = () => {
    if (this.state.page === 0) {
      // Homepage
      return <MealCard />
    } else if (this.state.page === 1) {
      // Profile
      return <Profile name={this.state.name} office={this.state.office} image={this.state.image} onNewName={this.onUpdateName} onNewOffice={this.onUpdateOffice}/>
    } else {
      // Add meal
      return <MealUpdate />
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
