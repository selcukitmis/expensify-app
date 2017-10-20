import React from 'react';
import { shallow } from 'enzyme'
import NotFound from '../../components/NotFoundPage'

test("should render NotFound correctly", () => {
    const wrapper = shallow(<NotFound />);
    // expect(wrapper.find("h1").length).toBe(1);
    // expect(wrapper.find("h1").text()).toBe("Expensify App");
    expect(wrapper).toMatchSnapshot();
});