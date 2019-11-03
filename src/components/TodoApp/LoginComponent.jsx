import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import AuthenticatedRouter from './AuthenticatedRouter';
class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state= {
            username : 'priyesh',
            password : '',
            hasLoginFailed : false,
            isLoginSuccessful : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onLogin(){
        if(this.state.username === 'admin' && this.state.password === 'password'){
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            this.setState({
                hasLoginFailed : true,
                isLoginSuccessful : false
            })
        }
    }

    render(){
        return(
            <div className="container">
                {this.state.hasLoginFailed &&  <div className="alert alert-warning">Invalid Credentials</div>}
                Username : <input type ="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type = "password" name="password"value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick = {this.onLogin}>Login</button>
            </div>
        )
    }

}

export default LoginComponent;