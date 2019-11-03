
import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {BrowserRouter as Router,Route,Switch,Link,withRouter } from 'react-router-dom'
import AuthenticatedRouter from './AuthenticatedRouter';

class HeaderComponent extends Component {
    render(){
        const isUserLoggedin = AuthenticationService.isLoggedin();
        console.log(isUserLoggedin)
        return(
            <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand">priyesh</div>
                <ul className="navbar-nav">
                   {isUserLoggedin  && <li><Link  className="nav-link" to="/welcome/admin">Home</Link> </li>}
                    {isUserLoggedin  && <li ><Link className="nav-link" to="/todos">To Do List</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                   {!isUserLoggedin  &&  <li><Link  className="nav-link" to="/login">Login</Link></li>}
                   {isUserLoggedin  &&  <li><Link  className="nav-link" to="/logout" onClick={AuthenticationService.logout()}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
           
        )
    }
}

export default withRouter(HeaderComponent) ;