import React from 'react';
import { shallow } from '../../enzyme';
import Button from '../common/Button';

describe('Button tests', () => {
    it('correctly renders a button without a render prop', () => {
        let wrapper = shallow(<Button
            text="Subscribe Now"
        />);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.children).toEqual('Subscribe Now');

        wrapper = shallow(<Button
            text="Subscribe Now"
            className="button-primary"
        />);
        expect(wrapper.find('.button-primary')).toBeDefined();

        let isDisabled = true;
        let isButtonLoading = true;
        wrapper = shallow(<Button
            text="Subscribe Now"
            disabled={isDisabled}
            isLoading={isButtonLoading}
        />);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.disabled).toEqual(true);

        isButtonLoading = true;
        wrapper = shallow(<Button
            text="Subscribe Now"
            isLoading={isButtonLoading}
        />);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.disabled).toEqual(true);

        isDisabled = true;
        wrapper = shallow(<Button
            text="Subscribe Now"
            disabled={isDisabled}
        />);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.disabled).toEqual(true);

        isButtonLoading = true;
        wrapper = shallow(<Button
            loadingText="Loading"
            text="Subscribe Now"
            isLoading={isButtonLoading}
        />);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.children).toEqual('Loading');

        isButtonLoading = true;
        wrapper = shallow(<Button
            text="Subscribe Now"
            isLoading={isButtonLoading}
        />);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.children).toEqual('Subscribe Now');

        const mockFn = jest.fn();
        wrapper = shallow(<Button
            text="Subscribe Now"
            onClick={mockFn}
        />);

        wrapper.find('button').simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

    it('correctly renders a button with a render prop', () => {
        const isDisabled = true;
        let wrapper = shallow(
            <Button
                disabled={isDisabled}
                render={
                    ({ disabled }) => (
                        <button disabled={disabled} type="button">
                            Subscribe Now
                        </button>
                    )
                }
            />,
        );

        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button').get(0).props.disabled).toEqual(true);

        const classNameApplied = 'button-primary';
        wrapper = shallow(
            <Button
                className={classNameApplied}
                render={
                    ({ className }) => (
                        <button className={className} type="button">
                            Subscribe Now
                        </button>
                    )
                }
            />,
        );
        expect(wrapper.find('.button-primary')).toBeDefined();

        let isButtonLoading = true;
        wrapper = shallow(
            <Button
                disabled={isButtonLoading}
                render={
                    ({ disabled }) => (
                        <button disabled={disabled} type="button">
                            Subscribe Now
                        </button>
                    )
                }
            />,
        );
        expect(wrapper.find('button').get(0).props.disabled).toEqual(true);

        const loadingTextValue = 'Loading';
        isButtonLoading = true;
        wrapper = shallow(
            <Button
                isLoading={isButtonLoading}
                render={
                    ({ isLoading }) => (
                        <button disabled={isLoading} type="button">
                            {isLoading ? loadingTextValue : 'Subscribe Now'}
                        </button>
                    )
                }
            />,
        );
        expect(wrapper.find('button').get(0).props.children).toEqual(loadingTextValue);

        const mockFn = jest.fn();
        wrapper = shallow(
            <Button
                render={
                    ({ className }) => (
                        <button className={className} type="button" onClick={mockFn}>
                            Subscribe Now
                        </button>
                    )
                }
            />,
        );

        wrapper.find('button').simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});
