import { connect } from 'react-redux';
import { completeToDO, deleteToDO } from '../actions/todos';
import TodoList from '../components/TodoList';


const getFilteredTodos = ({ todos, visibility }) => {
    switch (visibility) {
        case 'ALL':
            return todos;
        case 'ACTIVE':
            return todos.filter(t => !t.completed);
        case 'COMPLETED':
            return todos.filter(t => t.completed);
        default:
            throw new Error('Unknown filter: ' + visibility);
    }
}

const mapStateToProps = (state) => ({
    todos: getFilteredTodos(state) || []
});

const mapDispatchToProps = (dispatch) => ({
    complete: id => dispatch(completeToDO(id)),
    delete: id => dispatch(deleteToDO(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);