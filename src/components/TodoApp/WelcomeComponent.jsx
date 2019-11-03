import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import AuthenticatedRouter from './AuthenticatedRouter';
class WelcomeComponent extends Component {
    render(){
        return (
        <>
        <h1>Welcome</h1>
          <div className="container">Welcome {this.props.match.params.name} To manage the records click <Link to="/todos">here</Link></div>
        </>
          
        )
    }
}

export default WelcomeComponent;