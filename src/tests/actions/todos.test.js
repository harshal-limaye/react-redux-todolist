import { addToDo, completeToDO, deleteToDO } from '../../actions/todos';

describe("testing todo actions", () => {
    test('should create todo action', () => {
        const action = addToDo('sample!');
        expect(action).toEqual({ type: 'ADD', text: 'sample!' })
    });

    test('should create mark as complete action', () => {
        const action = completeToDO(12);
        expect(action).toEqual({ type: 'COMPLETE', id: 12 });
    });

    test('should create delete todo action', () => {
        const action = deleteToDO(8);
        expect(action).toEqual({ type: 'DELETE', id: 8 });
    })
});