import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../../components/Filter';

let wrapper;

describe('should test Filter component', () => {
    beforeEach(() => {
        const visibility = 'ALL';
        wrapper = shallow(<Filter visibility={visibility} />);
    });

    test('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call getClass method', () => {
        const className = wrapper.instance().getClass('ALL');
        expect(className).toBe('active');
    });

    test('should call setFilter method', () => {
        const visibility = 'ALL';
        const setFilter = jest.fn();
        const component = shallow(<Filter visibility={visibility} setFilter={setFilter} />);
        component.instance().setFilter('ACTIVE');
        expect(setFilter).toBeCalled();
    });
});