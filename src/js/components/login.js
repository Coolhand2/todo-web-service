import React, {Component} from 'react';
import User from './user';
import * as details from '../util/UserDetails';

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
                <p className="navbar-text"><User id={this.state.id} display={details.USER_DETAIL_DISPLAY_NAVBAR} /></p>
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