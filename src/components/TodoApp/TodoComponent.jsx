import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRouter from './AuthenticatedRouter';
class TodoComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos : [
                {id : 1, description : 'india',isCompleted : false,Date : new Date()},
                {id : 2, description : 'japan',isCompleted : false,Date : new Date()},
                {id : 3, description : 'usa',isCompleted : false,Date : new Date()}
            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Todo List</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isCompleted.toString()}</td>
                                    <td>{todo.Date.toString()}</td>
                                </tr>
                                
                            )
                        }
                    </tbody>
                </table>
               </div>
            </div>
        )
    }
}


export default TodoComponent;