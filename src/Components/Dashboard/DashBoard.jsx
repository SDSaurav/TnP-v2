import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';
import SignUPIN from '../Auth/SignUP_IN';
class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            dashboard: true,
            signUp: false,
            status: "",
        }
    }
    showS = (s) => {
        this.setState({status: s, signUp: true, dashboard: false})
    }
    showDash = () => {
        this.setState({status: "", dashboard: true, signUp: false})
    }
    render() {
        return (
            <Fragment>
                {this.state.dashboard ? (<div className="mainPage">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="#ffffff white container white border border-dark d-inline-flex p-2">
                        <h2 className="#ffffff white lighten-2 center mainHeading hide-on-med-and-down">
                            Welcome to T&P Cell
                        </h2>
                        <h6 className="black-text text-darken-4 center mainHeading hide-on-large-only">
                            Welcome to T&P Cell
                        </h6>
                        <p className="center hide-on-med-and-down flow-text">Please select one, in order to SignUp/SignIn.</p>
                        <p className="center hide-on-large-only">Please select one, in order to SignUp/SignIn.</p>
                        <div className="row">
                            <div className="col s6 l6 m6 offset-l5 offset-s3 offset-m4">
                                <ul>
                                    <li className="form_a p-3 mb-2 bg-gradient-info -text text-lighten-1" onClick={() => {this.showS("Student")}}>
                                        <h4>Student</h4>

                                    </li>
                                    <li className="form_a  text-lighten-1" onClick={() => {this.showS("Company")}}>
                                        <h4>Company</h4>

                                    </li>
                                    <li className="flow-text form_a text-lighten-1" onClick={() => {this.showS("Admin")}}>
                                        <h4>Admin</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Footer />
                        <br />
                    </div>
                </div>) : (null)}
                {this.state.signUp ? (
                <Fragment>
                    <nav className="nav-wrapper teal darken-4">
                    <div className="container">
                        <span className="brand-logo hide-on-small-only">Training And Placement</span>
                        <span className="hide-on-med-and-up">Training And Placement</span>
                    </div>
                </nav>
                    <br/>
                    <div className="container">
                    <div className="grey-text waves-effect waves-light underline form_a" onClick={this.showDash}> &nbsp;
                    <i className="material-icons">arrow_back</i></div>
                    </div>
                    <SignUPIN status={this.state.status}/>
                </Fragment>) : (null)}
            </Fragment>
        )
    }
}

export default DashBoard;