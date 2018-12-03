import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Location = () => (
    <Fragment>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span className="ml-3 mr-4 navbar--row-1--location--label">
            560078, BTM 1st Stage
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="navbar--location-arrow-down" />
    </Fragment>
);

export default Location;
