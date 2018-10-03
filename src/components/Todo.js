import React from 'react';
import PropTypes from 'prop-types';

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

    onComplete = () => this.props.onComplete(this.props.todo.id);

    onDelete = () => this.props.onDelete(this.props.todo.id);
}

Todo.propTypes = {
    todo: PropTypes.shape({
        completed: PropTypes.bool,
        id: PropTypes.number,
        text: PropTypes.string
    })
}

export default Todo;