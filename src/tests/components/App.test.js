import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('testing app component', () => {
    test('should render component correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});