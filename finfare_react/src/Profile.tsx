import * as React from 'react';

interface IProfile {
    name: string;
    defaultOffice: string;
    username: string;
    image: string; 
    password: string; 
}

export class Profile extends React.Component<{}, IProfile> {
    constructor(props: any) {
        super(props); 
        this.state = {
            defaultOffice: "1",
            image: "https://theoceanapi.azurewebsites.net/people/shelby-blue/image_2x", 
            name: "Kendra Andersen",
            password: "secretpassword",
            username: "kendra.andersen@parivedasolutions.com"
        }
    }
    public newNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name: e.target.value})
    }
    public saveChanges = () => {
        this.setState({name:"hi"});
    }
    
    public render() {
        return (
            <div className="container">
                <h2 className="pt-2">Update Profile</h2>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <img className="m-1 card-img-top" src={this.state.image} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col col-form-label">Name</label> 
                        <div className="col">
                            <input placeholder={this.state.name} onChange={this.newNameChanged} className="form-control here" type="text" />
                        </div>
                        <label className="col col-form-label">Default Office</label> 
                        <div className="col">
                            <select className="custom-select" defaultValue={this.state.defaultOffice} id="inputGroupSelect01">
                                <option value="0">Choose...</option>
                                <option value="1">Dallas</option>
                                <option value="2">Houston</option>
                                <option value="3">New York</option>
                            </select>
                        </div>
                        <label className="col col-form-label">Username</label>
                        <div className="col">
                            <input id="username" name="username" placeholder={this.state.username} className="form-control here" type="text" />
                        </div>
                        <label className="col col-form-label">Password</label>
                        <div className="col">
                            <input id="password" name="password" placeholder="******" className="form-control here" type="text" />
                        </div>
                        <div className="col pt-3">
                            <button className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}