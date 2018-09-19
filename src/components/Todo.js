import React from 'react';
import { connect } from 'react-redux';
import { deleteToDO } from '../actions/todos';

class Todo extends React.Component {

    render() {
        return (
            <li>
                {this.props.todo.text}
                <button onClick={this.delete} className="btn btn-delete">Delete</button>
                <button className="btn btn-complete">Complete</button>
            </li>
        );
    }

    delete = () => this.props.dispatch(deleteToDO(this.props.todo.id));
}

export default connect()(Todo);