import React from 'react';
import { shallow } from 'enzyme';
import { getFilteredTodos } from '../../containers/VisibleTodoList';
import todos from '../fixtures/todos';

describe('testing visible todo list', () => {
    
    test('should filter active todos', () => {
        const activeTodos = getFilteredTodos({ todos, visibility: 'ACTIVE' });
        expect(activeTodos.length).toBe(3);
    });

    test('should filter completed todos', () => {
        const activeTodos = getFilteredTodos({ todos, visibility: 'COMPLETED' });
        expect(activeTodos.length).toBe(1);
    });

    test('should filter all todos', () => {
        const activeTodos = getFilteredTodos({ todos, visibility: 'ALL' });
        expect(activeTodos.length).toBe(4);
    });

});