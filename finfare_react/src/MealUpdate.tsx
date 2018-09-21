import * as React from 'react'; 
import {IMeal} from './aMeal'; 

interface IMealUpdate {
    meal: IMeal
    onNewStartTime: (newTime: string, meal:IMeal) => void; 
    onNewEndTime: (newTime: string, meal:IMeal) => void; 
    onNewLocation: (newLoc: string, meal:IMeal) => void; 
    returnHome: () => void; 
}

export class MealUpdate extends React.Component<IMealUpdate> {

  // constructor(props: any) {
  //   super(props); 
  //   this.state = {
  //     endTime: "",
  //     location: "",
  //     startTime: "",   
  //   }
  // }

    // public changePage = () => {
    //     // Any button leads to homepage right now
    //     this.setState({location: "Dallas"})
    // }
    public newStartTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
      this.props.onNewStartTime(e.target.value, this.props.meal)
    }
    public newEndTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
      this.props.onNewEndTime(e.target.value, this.props.meal)
    }
    public newLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
      this.props.onNewLocation(e.target.value, this.props.meal)
    }
    public confirmMeal() {
      return () => this.props.returnHome(); 
    }
    public render() {
        return(
        
        <div className="container">

            <h2 className="pt-5">Select your lunch availability:</h2>
            <div>Start time: </div>
            <div className="input-group mb-3">
                    <select className="custom-select" defaultValue={this.props.meal.startTime} onChange={this.newStartTime}>
                      <option value="0">Choose...</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="1:00">1:00</option>
                    </select>
                  </div>
            <div>End time:</div>
            <div className="input-group mb-3">
                    <select className="custom-select" defaultValue={this.props.meal.endTime} onChange={this.newEndTime}>
                      <option value="0">Choose...</option>
                      <option value="12:30">12:30</option>
                      <option value="1:00">1:00</option>
                      <option value="1:30">1:30</option>
                    </select>
                  </div>
            <div>Office Location: </div>
            <div className="input-group mb-3">
                    <select className="custom-select" defaultValue={this.props.meal.location} onChange={this.newLocation}>
                      <option value="0">Choose...</option>
                      <option value="1">Dallas</option>
                      <option value="2">Houston</option>
                      <option value="3">New York</option>
                    </select>
                  </div>
            <button className="mr-2 mb-2 btn btn-primary" onClick={this.confirmMeal()}>Sign me up!</button>
            <button className="mb-2 btn btn-secondary">Sorry, I can't make it.</button>
        </div>

        )
    }
}