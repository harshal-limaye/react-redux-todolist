import React from 'react';
import { connect } from 'react-redux';
import { completeToDO, deleteToDO } from '../actions/todos';

class Todo extends React.Component {
    render() {
        return (
            <li className={this.props.todo.completed ? 'complete' : ''}>
                <input 
                    onClick={this.onComplete} 
                    defaultChecked={this.props.todo.completed} 
                    type="checkbox" />
                {this.props.todo.text}
                <button 
                    onClick={this.onDelete} 
                    className="btn btn-delete"
                >Delete</button>
            </li>
        );
    }

    onComplete = id => this.props.onComplete(this.props.todo.id);

    onDelete = id => this.props.onDelete(this.props.todo.id);
}

export default Todo;