/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default class CategoriesMobile extends Component {
    render() {
        return (
            <div className="call-to-order--container mobile-only">
                <div className="container">
                    <div className="call-to-order--content d-flex justify-content-between">
                        <div>
                            <h6 className="call-to-order--heading">Call to Order</h6>
                            <p className="call-to-order--number">1860  1234  1234</p>
                        </div>
                        <div className="call-to-order--phone-wrapper">
                            <FontAwesomeIcon icon={faPhone} className="call-to-order--call-icon" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
