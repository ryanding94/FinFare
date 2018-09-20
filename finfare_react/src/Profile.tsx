import * as React from 'react';

export class Profile extends React.Component {
    public render() {
        return (
            <div className="container">
                <h2 className="pt-2">Update Profile</h2>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <img className="m-1 card-img-top" src="https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col col-form-label">Name</label> 
                        <div className="col">
                            <input id="profilename" name="name" placeholder="myName" className="form-control here" type="text" />
                        </div>
                        <label className="col col-form-label">Default Office</label> 
                        <div className="col">
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected={true}>Choose...</option>
                                <option value="1">Dallas</option>
                                <option value="2">Houston</option>
                                <option value="3">New York</option>
                            </select>
                        </div>
                        <label className="col col-form-label">Username</label>
                        <div className="col">
                            <input id="username" name="username" placeholder="myUsername" className="form-control here" type="text" />
                        </div>
                        <label className="col col-form-label">Password</label>
                        <div className="col">
                            <input id="password" name="password" placeholder="******" className="form-control here" type="text" />
                        </div>
                        <div className="col pt-3">
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}