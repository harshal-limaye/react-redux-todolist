import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <li>
                {this.props.todo.text}
                <button className="btn btn-delete">Delete</button>
                <button className="btn btn-complete">Complete</button>
            </li>
        );
    }
}

export default Todo;