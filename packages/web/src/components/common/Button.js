import React from 'react';
import PropTypes from 'prop-types';
import { isFunction, isEmpty } from 'underscore';

const Button = (props) => {
    const {
        className,
        text,
        onClick,
        render,
        btnType,
        isLoading,
        loadingText,
        disabled,
        ...rest
    } = props;

    if (render && isFunction(render)) {
        return render({
            className,
            onClick,
            isLoading,
            disabled,
        });
    }

    if (isEmpty(text)) throw Error('Button must have text content');

    /* eslint-disable react/button-has-type */
    return (
        <button
            type={btnType}
            className={className}
            onClick={onClick}
            disabled={disabled || isLoading}
            {...rest}
        >
            {isLoading ? loadingText || text : text}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    loadingText: PropTypes.string,
    btnType: PropTypes.oneOf(['button', 'submit', 'reset']),
    text: PropTypes.string,
    onClick: PropTypes.func,
    render: PropTypes.func,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    className: '',
    text: '',
    loadingText: '',
    onClick: null,
    render: null,
    btnType: 'button',
    isLoading: false,
    disabled: false,
};

export default Button;
