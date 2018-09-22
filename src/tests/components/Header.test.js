import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('should test header component', () => {
    test('should render component correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});