import React from 'react';
import { shallow } from '../../enzyme';
import Dialog from '../common/Dialog';

describe('Dialog tests', () => {
    it('correctly renders a button with a render prop', () => {
        const classNameApplied = 'dialog';
        const wrapper = shallow(
            <Dialog
                className={classNameApplied}
                render={
                    ({ className }) => (
                        <div className={className}>
                            <div><a href="/#">Link 1</a></div>
                            <div><a href="/#">Link 2</a></div>
                        </div>
                    )
                }
            />,
        );
        expect(wrapper.find('.dialog')).toBeDefined();
    });
});
