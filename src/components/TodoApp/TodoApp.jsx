import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRouter from './AuthenticatedRouter';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import TodoComponent from './TodoComponent';
// import ErrorComponent from './ErrorComponent';

class TodoApp extends Component {
    render(){
        return(
            <div>
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch> 
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRouter path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRouter path="/todos" component={TodoComponent}/>
                        <AuthenticatedRouter path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRouter component={ErrorComponent}/>
                    </Switch>   
                    <FooterComponent/> 
                    </>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return (
        <div>An error has occured</div>
    );
}

export default TodoApp;