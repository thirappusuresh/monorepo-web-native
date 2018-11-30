/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';

const CategoryMarkup = () => (
    <ul className="mobile-categories--data-container d-flex justify-content-around">
        <li className="mobile-categories--list">
            <img height="26" src="../../../static/Doctor_Consultation.png" alt="Category" />
            <p>Medical Store</p>
        </li>
        <li className="mobile-categories--list">
            <img height="26" src="../../../static/Doctor_Consultation.png" alt="Category" />
            <p>Health Products</p>
        </li>
        <li className="mobile-categories--list">
            <img height="26" src="../../../static/Doctor_Consultation.png" alt="Category" />
            <p>Doctor Consultation</p>
        </li>
        <li className="mobile-categories--list">
            <img height="26" src="../../../static/Doctor_Consultation.png" alt="Category" />
            <p>Lab Tests</p>
        </li>
    </ul>
);

export default class CategoriesMobile extends Component {
    render() {
        return (
            <div className="mobile-categories--container mobile-only">
                <div className="container">
                    <div>
                        <CategoryMarkup />
                    </div>
                </div>
            </div>
        );
    }
}
