import PropTypes from 'prop-types';
import { isFunction } from 'underscore';

const Dialog = (props) => {
    const {
        className,
        render,
    } = props;

    if (render && isFunction(render)) {
        return render({
            className,
        });
    }
    throw Error('Dialog must have render method with its content');

    // if (isEmpty(text)) throw Error('Button must have text content');
};

Dialog.propTypes = {
    className: PropTypes.string,
    render: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
    className: '',
};

export default Dialog;
