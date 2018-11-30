import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button';

const Nextarrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Button
            render={
                () => (
                    <button type="button" style={style} className={className} onClick={onClick}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                )
            }
        />
    );
};
Nextarrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
};

Nextarrow.defaultProps = {
    className: '',
    onClick: null,
    style: {},
};
export default Nextarrow;
