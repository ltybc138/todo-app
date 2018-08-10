import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoList.css';

class TodoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="enter task"></input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;
