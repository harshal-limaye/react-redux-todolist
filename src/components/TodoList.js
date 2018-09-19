import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { completeToDO, deleteToDO } from '../actions/todos';

class TodoItems extends React.Component {

    render() {
        return (
            this.props.todos && this.props.todos.length > 0 ?
            <div className="todo-items">
                <ul>
                    {
                        this.props.todos.map((todo) => {
                            <Todo 
                                onDelete={this.delete} 
                                onComplete={this.complete} 
                                key={todo.id} 
                                todo={todo} 
                            />                            
                        })
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

const mapDispatchToProps = (dispatch) => ({
    delete: id => dispatch(deleteToDO(id)),
    complete: id => dispatch(completeToDO(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);