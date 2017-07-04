'use strict';

import React, { Component } from 'react';
import * as urgencies from '../util/urgencies';

export default class Todo extends Component {
    constructor(props) {
        console.log("Todo::constructor");
        super(props);
        this.state = {
            editing: props.editing || false
        };

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.remove = this.remove.bind(this);
    }

    get editing() { return this.props.editing; }
    get title() { return this.props.title; }
    get description() { return this.props.description; }
    get urgency() { return this.props.urgency; }

    edit() {
        //console.log("Todo::edit");
        //console.log(this);
        this.state.editing = true;
        this.setState({ editing: true });
    }
    save() {
        //console.log("Todo::save");
        //console.log(this);

        this.state.editing = false;
        this.setState(this.state);
        this.props.updateCallback(this.props.index, this, this.refs.title.value, this.refs.description.value, this.refs.urgency.value);
    }
    cancel() {
        //console.log("Todo::cancel");
        //console.log(this);
        this.state.editing = false;
        this.setState(this.state);
    }
    remove() {
        //console.log("Todo::remove");
        //console.log(this);
        this.props.removeCallback(this.props.index);
    }
    renderEdit() {
        //console.log("Todo::renderEdit");
        //console.log(this);
        return (
            <div className="well">
                <div className="form-group">
                    <label htmlFor="title">Item Name</label>
                    <input defaultValue={this.props.title} ref="title" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Item Description</label>
                    <textarea defaultValue={this.props.description} ref="description" className="form-control" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="urgency">Urgency: </label>
                    <select ref="urgency" className="form-control">
                        <option value={urgencies.UNKNOWN.value}>{urgencies.UNKNOWN.display}</option>
                        <option value={urgencies.HIGH.value}>{urgencies.HIGH.display}</option>
                        <option value={urgencies.MEDIUM.value}>{urgencies.MEDIUM.display}</option>
                        <option value={urgencies.LOW.value}>{urgencies.LOW.display}</option>
                    </select>
                </div>
                <div className="btn-group">
                    <button onClick={this.save} className="btn btn-success">Save!</button>
                    <button onClick={this.cancel} className="btn btn-danger">Cancel</button>
                </div>
            </div>
        );
    }
    renderNormal() {
        //console.log("Todo::renderNormal");
        //console.log(this);
        return (
            <div className="well">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <p><b>URGENCY:</b> {this.props.urgency.name}</p>
                <div className="btn-group">
                    <button onClick={this.edit} className="btn btn-warning">Edit</button>
                    <button onClick={this.remove} className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
    render() {
        //console.log("Todo::render");
        //console.log(this);
        if (this.state.editing) {
            return this.renderEdit();
        } else {
            return this.renderNormal();
        }
    }
};