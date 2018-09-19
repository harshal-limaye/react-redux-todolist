import React from 'react';
import { connect } from 'react-redux';
import { completeToDO, deleteToDO } from '../actions/todos';

class Todo extends React.Component {

    render() {
        return (
            <li className={this.isCompleted()}>
                {this.props.todo.text}
                <button onClick={this.delete} className="btn btn-delete">Delete</button>
                <button onClick={this.complete} className="btn btn-complete">Complete</button>
            </li>
        );
    }

    delete = () => this.props.dispatch(deleteToDO(this.props.todo.id));

    complete = () => this.props.dispatch(completeToDO(this.props.todo.id));

    isCompleted = () => this.props.todo.completed ? 'complete' : '';
}

export default connect()(Todo);