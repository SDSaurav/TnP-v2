import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import DashBoard from './Components/Dashboard/DashBoard';
import {connect} from "react-redux";
import { CURRENTUSER } from './Store/Actions/authActions';
import "./App.css";
import SignOut from './Components/Auth/SignOut';
import Registration from './Components/Dashboard/Student/Registration';
import Info from './Components/Dashboard/Company/Info';
import PostVacancy from './Components/Dashboard/Company/PostVacancy';
import Profile from './Components/Dashboard/UserProfile/Profile';
import {PervDataOfStudents} from "./Store/Actions/StudentsAction";
import Students from './Components/Dashboard/Student/Students';
import SDetails from "./Components/Dashboard/Student/SDetails";
import CDetails from "./Components/Dashboard/Company/CDetails";
import { PervDataOfCompanies } from './Store/Actions/CompanyActions';
import Vacancies from './Components/Dashboard/Company/Vacancies';
import Blocked from './Components/Dashboard/Admin/Blocked';
import Request from './Components/Dashboard/Admin/Request';
import Loader from './Components/Loader/Loader';
import Companies from './Components/Dashboard/Company/Companies';
class App extends Component {
  componentDidMount = () => {
    this.props.currentUser();
    this.props.pervDataOfStudents();
    this.props.pervDataOfCompanies();
  }
  render() {
    return (
      <div className="App">
        {this.props.User ? (this.props.Status ? (this.props.Status === "Admin" ? (<Router>
          <Fragment>
            <Navbar />
            <Routes>
                  <Route exact path="/" element={<Request/>}/>
                  <Route exact path="/Students" element={<Students/>} />
                  <Route exact path="/Companies" element={<Companies/>} />
                  <Route exact path="/Vacancies" element={<Vacancies/>} />
                  <Route exact path="/SDetails/:id" element={<SDetails/>} />
                  <Route exact path="/CDetails/:id" element={<CDetails/>} />
                  <Route exact path="/SignOut" element={<SignOut/>}/>
            </Routes>
          </Fragment>
        </Router>): (this.props.Status === "Student" ? (this.props.regS ? (<Router>
          <Fragment>
            <Navbar />
            <Routes>
                  <Route exact  path="/" element={<Vacancies/>} />
                  <Route exact path="/Companies" element={<Companies/>} />
                  <Route exact  path="/CDetails/:id" element={<CDetails/>} />
                  <Route exact  path="/Registration" element={<Registration/>}/> 
                  <Route exact  path="/Profile" element={<Profile/>}/> 
                  <Route exact  path="/SignOut" element={<SignOut/>}/>
            </Routes>
          </Fragment>
        </Router>): (<Registration />)) : (this.props.regC ? (<Router>
          <Fragment>
            <Navbar />
            <Routes>
                  <Route exact  path="/" element={<Students/>} />
                  <Route exact  path="/SDetails/:id" element={<SDetails/>} />
                  <Route exact  path="/CompanyInfo" element={<Info/>}/>
                  <Route exact  path="/PostVacancy" element={<PostVacancy/>} />
                  <Route exact  path="/Profile" element={<Profile/>}/> 
                  <Route exact  path="/SignOut" element={<SignOut/>}/>
            </Routes>
          </Fragment>
        </Router>) : (<Info />)))) : (<Loader />)) : (this.props.userIsBlocked ? (<Blocked/>): (<DashBoard />))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  const user = state.auth.currentUser ? state.auth.currentUser : null
  const status = state.auth.currentUser ? state.auth.status : null
  const regS = state.auth.currentUser ? state.student.allStudents.find(v => v.userId === user.uid) : null
  const regC = state.auth.currentUser ? state.company.allCompanies.find(v => v.userId === user.uid) : null
  return {
    User: user,
    Status: status,
    regS:regS,
    regC:regC,
    userIsBlocked: state.admin.userIsBlocked,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(CURRENTUSER()),
    pervDataOfStudents: () => dispatch(PervDataOfStudents()),
    pervDataOfCompanies: () => dispatch(PervDataOfCompanies()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
