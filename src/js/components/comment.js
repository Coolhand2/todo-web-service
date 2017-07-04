import React, {Component} from 'react';
import User from './user';
import * as details from '../util/UserDetails';

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <User display={details.USER_DETAIL_DISPLAY_COMMENT} username={this.props.username} />
                <div className="col-xs-10 well comment-body">{this.props.children}</div>
            </div>
        );        
    }
}