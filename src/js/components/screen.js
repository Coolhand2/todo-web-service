import React, {Component} from 'react';
import TodoList from './todolist';
import NavBar from './navbar';
import User from './user';
import * as locations from '../util/locations.js';

export default class Screen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <NavBar />
                <TodoList />
                <User location={locations.USER_DETAIL_DISPLAY_FULL} />
            </div>
        )

    }
};