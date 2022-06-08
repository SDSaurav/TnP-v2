import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const SignInLinks = (props) => {
    const char = props.email.slice(0, 1)
    return (<div className="total">
        <ul className="right">
            {props.status === "Admin" ? (<li>
                <NavLink to="/">Requests</NavLink>
            </li>) : (null)}
            {props.status === "Company" ? (<li>
                <NavLink to="/">Students</NavLink>
            </li>) : (null)}
            {props.status === "Admin" ? (<li>
                <NavLink to="/Students">Students</NavLink>
            </li>) : (null)}
            {props.status === "Student" ? (<li>
                <NavLink to="/">Vacancies</NavLink>
            </li>) : (null)}
            {props.status === "Admin" ? (<li>
                <NavLink to="/Vacancies">Vacancies</NavLink>
            </li>) : (null)}
            {props.status === "Admin" || props.status === "Student" ? (<li>
                <NavLink to="/Companies">Companies</NavLink>
            </li>) : (null)}
            {props.status === "Company" ? (<li>
                <NavLink to="/PostVacancy">Post New Vacancy</NavLink>
            </li>) : (null)}
            <li>
                <NavLink to="/SignOut">Sign Out</NavLink>
            </li>
            {props.status === "Company" || props.status === "Student" ? (<li>
                <NavLink to="/Profile" className='btn btn-floating teal darken-4'>{char}</NavLink>
            </li>) : (null)}
        </ul>
    </div>
    );
}
const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
    }
}
export default connect(mapStateToProps)(SignInLinks);