/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserMd,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';

const HealthProductsData = () => (
    <ul className="col-md-12 container-720 row doc-consultation--data-container web-only no-style">
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

const ImageLegend = ({ doctorConsultationLink }) => (
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
                        text="Book By Specialty"
                        data-href={doctorConsultationLink}
                    />
                    <Button
                        className="button-transparent doc-consultation--legend-button"
                        text="Book By Symptoms"
                        data-href={doctorConsultationLink}
                    />
                </div>
            </div>
        </div>
        <div className="mobile-only">
            <Button
                className="button-transparent doc-consultation--legend-button"
                text="Book By Specialty"
                data-href={doctorConsultationLink}
            />
            <Button
                className="button-transparent doc-consultation--legend-button"
                text="Book By Symptoms"
                data-href={doctorConsultationLink}
            />
        </div>
    </React.Fragment>
);

ImageLegend.propTypes = {
    doctorConsultationLink: PropTypes.string.isRequired,
};

export default class DoctorConsultation extends Component {
    state = {
        currentAppURI: '',
    }

    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            currentAppURI: window.location.href,
        }));
    }

    render() {
        const { currentAppURI } = this.state;
        const doctorConsultationLink = 'https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true';
        const doctorConsultationLinkWithReferrerPath = `${doctorConsultationLink}&referrerPath=${currentAppURI}`;

        return (
            <div className="doc-consultation--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className="col-md-12 d-flex justify-content-center doc-consultation--heading">
                            Doctor Consultation
                        </h2>
                        <HealthProductsData />
                    </div>
                    <ImageLegend doctorConsultationLink={doctorConsultationLinkWithReferrerPath} />
                </div>
            </div>
        );
    }
}
