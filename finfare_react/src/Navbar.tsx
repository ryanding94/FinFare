import * as React from 'react'; 

interface INavBarState {
    pageNum: number; 
    // 0 is homepage
    // 1 is my profile
    // 2 is add a meal
}

// export class NavBar extends React.Component {
export class NavBar extends React.Component<INavBarState> {
    public onUpdatePage = () => {
        // Change the page on the nav bar
        this.setState({pageNum: 0})
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         pageNum: 0
    //     }
    //     this.onUpdatePage = this.onUpdatePage.bind(this)
    // }
    // onUpdatePage(e) {
    //     this.setState({
    //         pageNum: e.target.value
    //     })
    // }
        public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="https://png.pngtree.com/element_origin_min_pic/00/02/68/9456839c960ae27.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    FinFare
                </a>   
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button> 
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* The active element needs to update by page state */}
                        {/* The onClick function needs to update to the correct page */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={this.onUpdatePage}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.onUpdatePage}>My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.onUpdatePage}>Add a new meal</a>
                        </li>
                    </ul>
                </div>        
            </nav>
        )
    }
}