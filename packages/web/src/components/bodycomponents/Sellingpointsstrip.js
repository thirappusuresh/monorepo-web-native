/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAward,
    faTruck,
    faDollarSign,
    faShieldAlt,

} from '@fortawesome/free-solid-svg-icons';

const sellingPoints = [
    {
        label: 'Genuine Medicines',
        icon: faAward,
    },
    {
        label: 'Timely Delivery',
        icon: faTruck,
    },
    {
        label: 'Easy Returns & Refunds',
        icon: faDollarSign,
    },
    {
        label: 'Secure Payments',
        icon: faShieldAlt,
    },
];

export default class Sellingpointsstrip extends Component {
    renderSellingPoints = () => (
        <ul className="col-md-8 selling-point--left web-only">
            {
                sellingPoints.map((sellingPoint) => {
                    const sellingPointLabel = sellingPoint.label;

                    return (
                        <li className="col-md-3" key={sellingPointLabel}>
                            <FontAwesomeIcon icon={sellingPoint.icon} />
                            <p>{sellingPointLabel}</p>
                        </li>
                    );
                })
            }
        </ul>
    )

    render() {
        return (
            <div className="selling-point--container">
                <div className="container">
                    <div className="row">
                        { this.renderSellingPoints() }
                        <ul className="col-md-4 selling-point--stickers">
                            <li className="selling-point--stickers-express">
                                <p>
                                    <span>2</span>
                                    <span className="mobile-only display-inline">&nbsp;</span>
                                    <br className="web-only" />
                                    HRS
                                </p>
                                <p>
                                    EXPRESS
                                    <br className="web-only" />
                                    <span className="mobile-only display-inline">&nbsp;</span>
                                    DELIVERY
                                    <br className="web-only" />
                                    <span className="mobile-only display-inline">&nbsp;</span>
                                    <span>T&amp;C Apply</span>
                                </p>
                            </li>
                            <li className="selling-point--stickers-standard">
                                <p>
                                    <span>24-48</span>
                                    <br className="web-only" />
                                    <span className="mobile-only display-inline">&nbsp;</span>
                                    HRS
                                </p>
                                <p>
                                    STANDARD
                                    <br className="web-only" />
                                    <span className="mobile-only display-inline">&nbsp;</span>
                                    DELIVERY
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
