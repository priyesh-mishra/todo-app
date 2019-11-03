import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import AuthenticatedRouter from './AuthenticatedRouter';

class LogoutComponent extends Component {
    render() {
        return (
            <>
            <h1>You are Logged out</h1>
            <div className = "container">Thanks for using application</div>
            </>
        )
    }
}

export default LogoutComponent;