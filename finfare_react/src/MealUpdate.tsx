import * as React from 'react'; 

interface IMealUpdate {
  startTime: string;
  endTime: string;
  location: string;
}

export class MealUpdate extends React.Component<{}, IMealUpdate> {

  constructor(props: any) {
    super(props); 
    this.state = {
      endTime: "",
      location: "",
      startTime: "",   
    }
  }

    // public changePage = () => {
    //     // Any button leads to homepage right now
    //     this.setState({location: "Dallas"})
    // }

    public render() {
        return(
        
        <div className="container">

            <h2 className="pt-2">Select your lunch availability:</h2>
            <div>Start time: </div>
            <div className="input-group mb-3">
                    <select className="custom-select" defaultValue="0">
                      <option value="0">Choose...</option>
                      <option value="1">12:00</option>
                      <option value="2">12:30</option>
                      <option value="3">1:00</option>
                    </select>
                  </div>
            <div>End time:</div>
            <div className="input-group mb-3">
                    <select className="custom-select" defaultValue="0">
                      <option value="0">Choose...</option>
                      <option value="1">12:30</option>
                      <option value="2">1:00</option>
                      <option value="3">1:30</option>
                    </select>
                  </div>
            <div>Office Location: </div>
            <div className="input-group mb-3">
                    <select className="custom-select" defaultValue="0">
                      <option value="0">Choose...</option>
                      <option value="1">Dallas</option>
                      <option value="2">Houston</option>
                      <option value="3">New York</option>
                    </select>
                  </div>
            <button className="mr-2 btn btn-primary" >Sign me up!</button>
            <button className="btn btn-secondary">Sorry, I can't make it.</button>
        </div>

        )
    }
}