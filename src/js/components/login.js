import React, {Component} from 'react';
import User from './user';
import * as locations from '../util/locations';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            id: 1
        }
    }

    render() {
        if(this.state.loggedIn){
            return (
                <p className="navbar-text"><User id={this.state.id} location={locations.USER_DETAIL_DISPLAY_NAVBAR} /></p>
            );
        } else {                    
            return (
                <p className="navbar-text">
                    You need to <button className="btn btn-default btn-xs">Login</button> or <button className="btn btn-default btn-xs">Register</button>
                </p>
            );
        }
    }
};