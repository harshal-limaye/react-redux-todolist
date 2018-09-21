import visibilityReducer from '../../reducers/visibility';
import TODOLIST from '../fixtures/todos';

let todos;

describe('testing visibility reducer', () => {
    beforeEach(() => {
        todos = TODOLIST;
    });

    test('should set filter', () => {
        const state = visibilityReducer('ALL', { type: 'SET_VISIBILITY_FILTER', filter: 'ACTIVE' });
        expect(state).toBe('ACTIVE');
    });

    test('should set default filter if incorrect type', () => {
        const state = visibilityReducer(undefined, { type: 'INCORRECT_FILTER', filter: 'ACTIVE' });
        expect(state).toBe('ALL');
    });
});