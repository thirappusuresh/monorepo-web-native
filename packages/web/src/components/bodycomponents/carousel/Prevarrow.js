import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button';

const Prevarrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Button
            render={
                () => (
                    <button type="button" style={style} className={className} onClick={onClick}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                )
            }
        />
    );
};
Prevarrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
};

Prevarrow.defaultProps = {
    className: '',
    onClick: null,
    style: {},
};
export default Prevarrow;
