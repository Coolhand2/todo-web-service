import React, {Component} from 'react';
import Todo from './todo';

export default class TodoList extends Component {
    constructor() {
        //console.log("TodoList::constructor");
        super();
        this.state = {todoList: []};

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    addTodo() {
        console.log("TodoList::addTodo");
        this.state.todoList.push({editing:true});
        console.log("TodoList::addTodo::added new todo item");
        this.setState(this.state);
        console.log("TodoList::addTodo::state has been set");
    }
    removeTodo(index) {
        //console.log("TodoList::removeTodo");
        this.state.todoList.splice(index, 1);
        //console.log(this.state.todoList);
        this.setState(this.state);
    }
    updateTodo(index, item, title, description, urgency) {
        //console.log("TodoList::updateTodo");
        this.state.todoList[index] = {
            title: title,
            description: description,
            urgency: urgency
        };
        this.setState(this.state);
    }
    showTodoList() {
        //console.log("TodoList::showTodoList");
        //console.log(this.state.todoList);
        return this.state.todoList.map((item, i) => {
            //console.log("TodoList::showTodoList::map");
            //console.log(item);
            return <Todo 
                key={i} index={i}
                title={item.title} description={item.description} urgency={item.urgency} editing={item.editing}
                removeCallback={this.removeTodo} updateCallback={this.updateTodo}
            />
        })
            
    }
    render() {
        //console.log("TodoList::render");
        return (
            <div>
                <button onClick={this.addTodo} className="btn btn-primary">Add New Item</button>
                {this.showTodoList()}
            </div>
        )

    }
}
