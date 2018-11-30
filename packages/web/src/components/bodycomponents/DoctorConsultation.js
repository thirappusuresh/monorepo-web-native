/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserMd,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';
import { navigate } from '../../utils/NavUtils';

const HealthProductsData = () => (
    <ul className="col-md-12 container-720 row doc-consultation--data-container web-only">
        <li className="col-md-4">
            <h6>5 Lakh+</h6>
            <p>Patients Consulted</p>
        </li>
        <li className="col-md-4">
            <h6>1000+</h6>
            <p>Medlife Doctors</p>
        </li>
        <li className="col-md-4">
            <h6>30+</h6>
            <p>Specialities</p>
        </li>
    </ul>
);

const handleBookBySpeciality = () => {
    navigate('https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true');
};

const handleBookBySymptoms = () => {
    navigate('https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true');
};

const ImageLegend = () => (
    <React.Fragment>
        <div className="doc-consultation--image-legend-wrpr d-flex justify-content-center">
            <div className="doc-consultation--legend-icon">
                <FontAwesomeIcon icon={faUserMd} />
            </div>
            <div className="doc-consultation--main-wrpr">
                <h4 className="doc-consultation--legend-heading">Doctor Consultation at your place and your time</h4>
                <p className="doc-consultation--legend-desc">Get 25 % off on 1st consultation</p>
                <div className="web-only">
                    <Button
                        className="button-transparent doc-consultation--legend-button"
                        text="Book By Speciality"
                        onClick={handleBookBySpeciality}
                    />
                    <Button
                        className="button-transparent doc-consultation--legend-button"
                        text="Book By Symptoms"
                        onClick={handleBookBySymptoms}
                    />
                </div>
            </div>
        </div>
        <div className="mobile-only">
            <Button
                className="button-transparent doc-consultation--legend-button"
                text="Book By Speciality"
                onClick={handleBookBySpeciality}
            />
            <Button
                className="button-transparent doc-consultation--legend-button"
                text="Book By Symptoms"
                onClick={handleBookBySymptoms}
            />
        </div>
    </React.Fragment>
);

export default class ShopHealthProducts extends Component {
    render() {
        return (
            <div className="doc-consultation--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className="col-md-12 d-flex justify-content-center doc-consultation--heading">Doctor Consultation</h2>
                        <HealthProductsData />
                    </div>
                    <ImageLegend />
                </div>
            </div>
        );
    }
}
