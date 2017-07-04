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
                <Comment username='Test User 1' comment='This is a comment!' />
                <Comment username='Test User 2' comment='This<br />is<br />a<br />comment<br />with<br />formatting<br />that<br />stretches<br />the<br />comment<br />block!' />
                <Comment username='Test User 2' comment='<p>This is a lorem ipsum comment that just takes in a long string to ensure it stretches correctly.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis maximus libero, a laoreet ante lacinia sit amet. Integer elementum nisl diam, id gravida enim hendrerit id. Suspendisse lobortis massa nec imperdiet mattis. Suspendisse placerat nec odio eu rutrum. Morbi euismod dolor metus, a laoreet ex laoreet vel. Cras quis libero sed velit imperdiet pharetra. Maecenas consequat egestas venenatis. Etiam mauris sem, vestibulum et nisi et, pharetra mollis quam. Vestibulum semper quis sapien ac convallis. In tellus odio, gravida at sem quis, pharetra efficitur nisl. Nam rhoncus porttitor lacinia.</p>

<p>Praesent vel bibendum orci. Suspendisse feugiat mi in commodo euismod. Vestibulum iaculis elit mi, vitae interdum justo gravida venenatis. Donec volutpat diam nec bibendum tempor. Vestibulum et magna varius nisi fringilla dapibus. Proin venenatis sapien eget mi semper sagittis. Donec dolor velit, rutrum et rutrum vestibulum, pretium a ante. Vivamus volutpat, libero posuere scelerisque sodales, ligula risus consequat ex, id ullamcorper dolor purus a arcu. Morbi lacus elit, malesuada a nulla eleifend, interdum viverra ligula. Pellentesque vitae ex tellus. Morbi iaculis quis velit ut ullamcorper. Vestibulum et nisl porta, auctor magna id, pulvinar nibh.</p>

<p>Pellentesque feugiat sem facilisis risus pretium aliquet. Donec ac vehicula dolor. Nunc et ante a elit lacinia lobortis. In eu nisl vitae est porttitor egestas sed ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra pretium urna in viverra. Etiam eu felis vel neque tempor ultrices quis id elit.</p>

<p>Donec at mauris metus. Suspendisse potenti. Proin non lacus quis elit blandit placerat. Proin hendrerit hendrerit faucibus. Cras sit amet libero enim. Fusce vel sem sed nisl mollis consequat in a dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>Integer quis ligula consequat, efficitur sem in, ultrices nunc. Donec pharetra elit ut placerat laoreet. Nunc non sollicitudin lacus. Phasellus convallis ligula sit amet velit blandit iaculis vel ut ligula. Aliquam erat volutpat. Phasellus eleifend massa ex, at mollis elit tincidunt id. Phasellus sit amet pretium odio. Vestibulum at urna ante. Morbi condimentum viverra ante, at vehicula metus mattis vitae.</p>' />
            </div>
        )

    }
};