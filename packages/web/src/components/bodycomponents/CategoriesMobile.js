/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Link from 'next/link';
import navigationLinks from '../../constants/navigations';

const CategoryMarkup = () => (
    <ul className="mobile-categories--data-container d-flex justify-content-around no-style">
        <li className="mobile-categories--list">
            <Link as={`/${navigationLinks.order}`} href="/MedicalStore">
                <button type="button">
                    <img height="26" src="../../../static/Medical_Store.png" alt="Category" />
                    <p>Medical Store</p>
                </button>
            </Link>

        </li>

        <li className="mobile-categories--list">
            <button type="button" className="btn-redirect" data-href="https://shop.medlife.com/">
                <img height="26" src="../../../static/Health_Products.png" alt="Category" />
                <p>Health Products</p>
            </button>
        </li>
        <li className="mobile-categories--list">
            <button
                type="button"
                data-href="https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true"
            >
                <img height="26" src="../../../static/Doctor_Consultation.png" alt="Category" />
                <p>Doctor Consultation</p>
            </button>
        </li>
        <li className="mobile-categories--list">
            <button type="button" className="btn-redirect" data-href="https://labs.medlife.com/">
                <img height="26" src="../../../static/Lab_Packages.png" alt="Category" />
                <p>Lab Tests</p>
            </button>
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
