import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../components/Todo';
import todos from '../fixtures/todos';

let wrapper;

describe('testing todo component', () => {
    beforeEach(() => {
        wrapper = shallow(<Todo todo={todos[0]} />)
    });
    
    test('should render todo component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should check if active class name applied', () => {
        expect(wrapper.find('.complete').length).toBe(1);
    });

    test('should not apply class name `complete` if completed is false', () => {
        const component = shallow(<Todo todo={todos[3]} />);
        expect(component.find('.complete').length).toBe(0);
    });

    test('should call onDelete method', () => {
        const onDelete = jest.fn();
        const component = shallow(<Todo todo={todos[3]} onDelete={onDelete} />);
        component.instance().onDelete(todos[3].id);
        expect(onDelete).toHaveBeenCalled();
    });

    test('should call onComplete method', () => {
        const onComplete = jest.fn();
        const component = shallow(<Todo todo={todos[3]} onComplete={onComplete} />);
        component.instance().onComplete(todos[3].id);
        expect(onComplete).toHaveBeenCalled();
    });
});