import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../components/Todo';
import todos from '../fixtures/todos';

let wrapper;

describe('testing todo component', () => {
    beforeEach(() => {
        wrapper = shallow(<Todo todo={todos[3]} />)
    });
    
    test('should render todo component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});