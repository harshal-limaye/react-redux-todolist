import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList';
import todos from '../fixtures/todos';

describe('testing todolist component', () => {
    test('should render todolist component with todos', () => {
        const wrapper = shallow(<TodoList todos={todos} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render todolist component without todos', () => {
        const wrapper = shallow(<TodoList todos={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
})