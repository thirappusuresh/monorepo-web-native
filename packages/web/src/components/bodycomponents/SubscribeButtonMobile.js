/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';

export default class SubscribeButtonMobile extends Component {
    render() {
        const content = (
            <div className="container">
                <div className="call-to-order--content subscribe-now-wrapper d-flex justify-content-between mb-2">
                    <div className="d-flex justify-content-center">

                        <div className="mr-2">
                            <FontAwesomeIcon icon={faSyncAlt} className="call-to-order--call-icon" />
                        </div>
                        <div
                            className="subscribe-now-wrapper--text-content"
                        >
                            Need medicines on regular basis?
                        </div>
                    </div>

                    <div className="d-flex align-items-end">
                        <button
                            type="button"
                            data-href="https://m.medlife.com/#/root/home/subscription/info?flow=subscription"
                            className="btn btn-link p-0 subscribe-now-btn"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="call-to-order--container mobile-only">
                <div className="a-unstyled visible-small-screen">
                    {content}
                </div>
            </div>
        );
    }
}
