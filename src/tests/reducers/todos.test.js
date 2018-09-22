import todosReducer from '../../reducers/todos';
import TODOLIST from '../fixtures/todos';

let todos;

const applyReducer = (state, action) => todosReducer(state, action); 

describe('testing todos reducer', () => {
    beforeEach(() => {
        todos = TODOLIST;
    });

    test('should return previous state if action is unknown', () => {
        const updatedTodos = applyReducer(todos, { type: 'SUBSTRACT', text: 'new todo' });
        expect(updatedTodos).toEqual(todos);
    })

    test('should create a new todo item', () => {
        const updatedTodos = applyReducer(todos, { type: 'ADD', text: 'new todo' });
        expect(updatedTodos.length).toBe(5);
        expect(updatedTodos[0]).toEqual({ id: 4, text: 'new todo', completed: false });
    });

    test('should mark a todo item as completed', () => {
        const updatedTodos = applyReducer(todos, { type: 'COMPLETE', id: 0 });
        expect(updatedTodos[3].completed).toBe(true);
    });

    test('should mark a todo item as incomplete', () => {
        const updatedTodos = applyReducer(todos, { type: 'COMPLETE', id: 3 });
        expect(updatedTodos[0].completed).toBe(false);
    });

    test('should delete a todo item', () => {
        const updatedTodos = applyReducer(todos, { type: 'DELETE', id: 3 });
        expect(updatedTodos.length).toBe(3);
    });
});