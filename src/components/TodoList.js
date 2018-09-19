import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoItems extends React.Component {

    render() {
        return (
            this.props.todos && this.props.todos.length > 0 ?
            <div className="todo-items">
                <ul>
                    {
                        this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)
                    }
                </ul>
            </div>
            : false
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoItems);