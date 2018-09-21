import * as React from 'react';
import {IMeal} from './aMeal';

interface IMealCard {
    meal: IMeal
    onEditMeal: (meal:IMeal) => void; 
}

export class MealCard extends React.Component<IMealCard> {
    public editMeal = () => {
        this.props.onEditMeal(this.props.meal)
    }
    public render() {
        return (
            <div className="container">
                <div className="mt-3 card">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.meal.startTime} - {this.props.meal.endTime}</h3>
                        <div className="row width=25%">
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x"/>
                            </div>
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://theoceanapi.azurewebsites.net/people/ryan-carter/image_2x"/>
                            </div>
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://theoceanapi.azurewebsites.net/people/aaron-boswell/image_2x?dateTime=636232947189900000"/>
                            </div>
                            <div className="col">
                                <img className="m-1 card-img-top" src="https://theoceanapi.azurewebsites.net/people/bruce-ballengee/image_2x?dateTime=636016716887400000"/>
                            </div>
                        </div>
                        <div className="mt-2">
                            {/* <span>18 minutes remaining until lunch</span> */}
                            <button className="mt-2 btn btn-secondary float-right" onClick={this.editMeal}>I can't make it</button>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}