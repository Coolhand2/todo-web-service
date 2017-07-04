import React, {Component} from 'react';
import * as locations from '../util/locations';

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Coolhand2',
            display: props.location
        };
    }

    render() {
        switch(this.state.display) {
            case locations.USER_DETAIL_DISPLAY_NAVBAR:
                return(
                    <a href="#" className="navbar-link">{this.state.username}</a>
                );
            case locations.USER_DETAIL_DISPLAY_FULL:
            case locations.USER_DETAIL_DISPLAY_SHORT:
            default:
                return(
                    <p>
                        <a href="#">{this.state.username}</a>
                    </p>
                );
        }
        
    }
}