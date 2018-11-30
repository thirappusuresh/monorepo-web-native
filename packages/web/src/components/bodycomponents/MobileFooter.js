/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAward,
    faTruck,
    faDollarSign,

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
];

export default class MobileFooter extends Component {
    renderSellingPoints = () => (
        <div className="selling-point--left d-flex justify-content-between  align-items-center">
            {
                sellingPoints.map((sellingPoint) => {
                    const sellingPointLabel = sellingPoint.label;

                    return (
                        <div className="selling-point-points" key={sellingPointLabel}>
                            <FontAwesomeIcon icon={sellingPoint.icon} />
                            <p>{sellingPointLabel}</p>
                        </div>
                    );
                })
            }
        </div>
    )

    render() {
        return (
            <div className="mobile-footer--container mobile-only">
                <div className="container">
                    <div className="row">
                        { this.renderSellingPoints() }
                    </div>
                </div>
            </div>
        );
    }
}
