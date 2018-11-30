/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Button from '../common/Button';
import { navigate } from '../../utils/NavUtils';

export default class OrderMedicines extends Component {
    handleSubscribe = () => {
        navigate('https://m.medlife.com/#/root/home/subscription/info?flow=subscription');
    }

    handleUploadPrescription = () => {
        navigate('https://m.medlife.com/');
    }

    handleNoRx = () => {
        navigate('https://m.medlife.com/#/root/norxoptions');
    }

    render() {
        return (
            <div className="other-medicines--container">
                <div className="container">
                    <div className="row d-flex justify-content-center web-only">
                        <h2 className="col-md-12 d-flex justify-content-center other-medicines--heading">Order Medicines</h2>
                        <ul className="col-md-12 d-flex justify-content-between">
                            <li className="other-medicines--subscribe">
                                <h6>Need Medicine on regular basis?</h6>
                                <Button
                                    className="button-transparent"
                                    text="Subscribe Now"
                                    onClick={this.handleSubscribe}
                                />
                            </li>
                            <li className="other-medicines--prescription">
                                <h6>Have a Prescription?</h6>
                                <Button
                                    className="button-primary"
                                    text="Upload Prescription"
                                    onClick={this.handleUploadPrescription}
                                />
                            </li>
                            <li className="other-medicines--upload">
                                <h6>Don’t have a Prescription?</h6>
                                <Button
                                    className="button-transparent"
                                    text="Get Started"
                                    onClick={this.handleNoRx}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-only">
                        <li className="other-medicines--prescription">
                            <Button
                                className="button-primary other-medicines--prescription-buttons-mobile"
                                text="Upload Prescription"
                                onClick={this.handleSubscribe}
                            />
                        </li>
                        <li className="other-medicines--prescription">
                            <Button
                                className="button-transparent other-medicines--prescription-buttons-mobile"
                                text="Don't have Prescription"
                                onClick={this.handleSubscribe}
                            />
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}
