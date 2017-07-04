import React, {Component} from 'react';
import Login from './login';

export default class NavBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Todo List</a>
                    </div>
                    <div className="navbar-right">
                        <Login />
                    </div>
                </div>
            </nav>
        );
    }
};