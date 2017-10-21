import React from 'react';
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses';

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm correctly with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});


test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", { preventDefault: () => { } });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const newValue = "New Value";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: { value: newValue }
    });
    expect(wrapper.state("description")).toBe(newValue);
});

test("should set note on textarea change", () => {
    const newValue = "New Note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").at(0).simulate("change", {
        target: { value: newValue }
    });
    expect(wrapper.state("note")).toBe(newValue);
});

test("should set amount input change", () => {
    const newValue = "350.12";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value: newValue }
    });
    expect(wrapper.state("amount")).toBe(newValue);
});