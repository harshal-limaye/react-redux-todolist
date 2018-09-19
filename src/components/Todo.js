import React from 'react';
import { connect } from 'react-redux';
import { completeToDO, deleteToDO } from '../actions/todos';

const Todo = () => {
    return (
        <li>
            {this.props.todo.text}
            <button onClick={this.props.onDelete(this.props.todo.id)} className="btn btn-delete">Delete</button>
            <button onClick={this.props.onComplete(this.props.todo.id)} className="btn btn-complete">Complete</button>
        </li>
    );
}

export default Todo;