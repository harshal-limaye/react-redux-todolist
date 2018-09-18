import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/todos';

class CreateTodo extends React.Component {
    render () {
        return (
            <div className="todo-create">
                <input type="text" onKeyDown={this.handleEnter} />
            </div>
        );
    }

    handleEnter = (e) => {
        if (e.keyCode === 13 && e.target.value && e.target.value.trim() !== '') {
            this.props.dispatch(addToDo(e.target.value));
            e.target.value = '';
        }
    }
}

export default connect()(CreateTodo);