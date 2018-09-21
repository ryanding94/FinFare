import * as React from 'react';

interface IProfile {
    name: string;
    office: string;
    image: string; 
    onNewName: (name: string) => void;
    onNewOffice: (name: string) => void; 
    returnHome: () => void; 
}

export class Profile extends React.Component<IProfile> {
    public newName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onNewName(e.target.value)
    }
    public newOffice = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.onNewOffice(e.target.value)
    } 
    public confirmSave () {
        return () => this.props.returnHome(); 
    }   
    public render() {
        return (
            <div className="container">
                <h2 className="pt-5">Update Profile</h2>
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
                            <button className="mt-2 btn btn-primary float-right" onClick={this.confirmSave()}>Save</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}