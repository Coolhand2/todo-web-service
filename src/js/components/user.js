import React, {Component} from 'react';
import * as details from '../util/UserDetails';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch(this.props.display) {
            case details.USER_DETAIL_DISPLAY_NAVBAR:
                return(
                    <a href="#" className="navbar-link">{this.props.username}</a>
                );
            case details.USER_DETAIL_DISPLAY_FULL:
                return (
                    <div>
                        <img src="http://via.placeholder.com/200x200" className="img-thumbnail" />
                    </div>
                );
            case details.USER_DETAIL_DISPLAY_COMMENT:
                return (
                    <div className="col-xs-2 center comment-avatar">
                        <img src="http://via.placeholder.com/75x75" className="img-thumbnail" />
                        <p>
                            <a href="#">{this.props.username}</a>
                        </p>
                    </div>
                );
            case details.USER_DETAIL_DISPLAY_SHORT:
            default:
                return(
                    <p>
                        <a href="#">{this.props.username}</a>
                    </p>
                );
        }
        
    }
}