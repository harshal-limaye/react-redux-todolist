import { connect } from 'react-redux';
import { completeToDO, deleteToDO } from '../actions/todos';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
    todos: state.todos || []
});

const mapDispatchToProps = (dispatch) => ({
    complete: id => dispatch(completeToDO(id)),
    delete: id => dispatch(deleteToDO(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);