/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Button from '../common/Button';

export default class OrderMedicines extends Component {
    render() {
        return (
            <div className="other-medicines--container">
                <div className="container">
                    <div className="row d-flex justify-content-center web-only">
                        <h1 className="col-md-12 d-flex justify-content-center other-medicines--heading">
                            Online Pharmacy
                        </h1>
                        <ul className="col-md-12 d-flex justify-content-between no-style">
                            <li className="other-medicines--subscribe">
                                <h6>Need Medicine on regular basis?</h6>
                                <Button
                                    className="button-transparent"
                                    text="Subscribe Now"
                                    data-href="https://m.medlife.com/#/root/home/subscription/info?flow=subscription"
                                />
                            </li>
                            <li className="other-medicines--prescription">
                                <h6>Have a Prescription?</h6>
                                <Button
                                    className="button-primary"
                                    text="Upload Prescription"
                                    data-href="https://m.medlife.com/"
                                />
                            </li>
                            <li className="other-medicines--upload">
                                <h6>Don’t have a Prescription?</h6>
                                <Button
                                    className="button-transparent"
                                    text="Get Started"
                                    data-href="https://m.medlife.com/#/root/norxoptions"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-only">
                        <li className="other-medicines--prescription">
                            <Button
                                className="button-primary other-medicines--prescription-buttons-mobile"
                                text="Upload Prescription"
                                data-href="https://m.medlife.com/"
                            />
                        </li>
                        <li className="other-medicines--prescription">
                            <Button
                                className="button-transparent other-medicines--prescription-buttons-mobile"
                                text="Don't have Prescription"
                                data-href="https://m.medlife.com/#/root/norxoptions"
                            />
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}
