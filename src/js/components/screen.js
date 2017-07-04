import React, {Component} from 'react';
import TodoList from './todolist';
import NavBar from './navbar';
import User from './user';
import Comment from './comment';
import * as details from '../util/UserDetails';

export default class Screen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <NavBar />
                <TodoList />
            </div>
        )

    }
};