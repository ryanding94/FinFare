import * as React from 'react';

interface IProfile {
    name: string;
    office: string;
    image: string; 
    onNewName: (name: string) => void;
    onNewOffice: (name: string) => void; 
}

export class Profile extends React.Component<IProfile> {
    // constructor(props: any) {
    //     super(props); 
    // }
    public newName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onNewName(e.target.value)
    }
    public newOffice = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.onNewOffice(e.target.value)
    }
    // public saveChanges = () => {
    //     this.setState({password:"**"});
    //     // Reload input boxes here
    // }
    
    public render() {
        return (
            <div className="container">
                <h2 className="pt-2">Update Profile</h2>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <img className="m-1 card-img-top" src={this.props.image} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col col-form-label">Name</label> 
                        <div className="col">
                            <input placeholder={this.props.name} onChange={this.newName} className="form-control here" type="text" />
                        </div>
                        <label className="col col-form-label">Default Office</label> 
                        <div className="col">
                            <select className="custom-select" defaultValue={this.props.office} onChange={this.newOffice}>
                                <option value="0">Choose...</option>
                                <option value="1">Dallas</option>
                                <option value="2">Houston</option>
                                <option value="3">New York</option>
                            </select>
                        </div>
                        {/* <label className="col col-form-label">Username</label>
                        <div className="col">
                            <input placeholder={this.state.username} onChange={this.newUsername} className="form-control here" type="text" />
                        </div>
                        <label className="col col-form-label">Password</label>
                        <div className="col">
                            <input placeholder="******" onChange={this.newPassword} className="form-control here" type="text" />
                        </div> */}
                        {/* <div className="col pt-3">
                            <button className="btn btn-primary" onClick={this.saveChanges}>Save Changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}