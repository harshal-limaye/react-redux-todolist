import React from 'react';
import { shallow } from 'enzyme';
import { CreateTodo } from '../../containers/CreateTodo';

describe('testing create todo component', () => {

    test('should render create todo properly', () => {
        const wrapper = shallow(<CreateTodo />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle keydown event', () => {
        const e = {
            keyCode: 13,
            target: {
                value: 'sample'
            }
        };
        const dispatch = jest.fn();
        const wrapper = shallow(<CreateTodo dispatch={dispatch} />);
        wrapper.instance().handleEnter(e);
        expect(e.target.value).toBe('');
    });

    test('should not handle keydown event if enter not pressed', () => {
        const e = {
            keyCode: 49,
            target: {
                value: 'sample'
            }
        };
        const dispatch = jest.fn();
        const wrapper = shallow(<CreateTodo dispatch={dispatch} />);
        wrapper.instance().handleEnter(e);
        expect(e.target.value).toBe('sample');
    });
});