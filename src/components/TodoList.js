import React from 'react';
import Todo from './Todo';


class ToDoList extends React.Component {

    render() {
        return (
            <div className="todo-items">
                <ul>
                    {
                        this.props.todos.map((todo) => {
                            return (
                                <Todo 
                                    onComplete={this.props.complete} 
                                    onDelete={this.props.delete} 
                                    key={todo.id} 
                                    todo={todo} 
                                />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ToDoList;