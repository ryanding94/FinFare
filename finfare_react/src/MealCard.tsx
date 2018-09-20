import * as React from 'react';

export class MealCard extends React.Component {
    public render() {
        return (
            <div className="container">
                <div className="mt-3 card">
                    <div className="card-body">
                        {/* The title needs to reflect data on the meal */}
                        <h3 className="card-title">11:30 - 12:30</h3>
                        {/* This needs to be evenly divided between participants */}
                        <div className="row width=25%">
                            <div className="col">
                                {/* Each image needs to be passed in */}
                                <img className="m-1 card-img-top" src="https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x"/>
                            </div>
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx046-512.png"/>
                            </div>
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx046-512.png"/>
                            </div>
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx046-512.png"/>
                            </div>
                        </div>
                        <div className="mt-2">
                            {/* This needs to be a timer method! */}
                            <span>18 minutes remaining until lunch</span>
                            {/* This button needs to go to MealUpdate for this meal */}
                            <button className="mt-2 btn btn-secondary float-right">I can't make it</button>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}