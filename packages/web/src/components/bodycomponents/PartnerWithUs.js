/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Button from '../common/Button';

export default class PartnerWithUs extends Component {
    render() {
        return (
            <div className="partner-with-us--container web-only">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h4 className="col-md-12 d-flex justify-content-center partner-with-us--heading">
                            Partner With Us
                        </h4>
                        <h4 className="col-md-12 d-flex justify-content-center partner-with-us--sub-heading">
                            Partner with us and grow with us in health and wealth!
                        </h4>
                        <ul className="col-md-12 container-720 d-flex justify-content-between no-style">
                            <li className="partner-with-us--subscribe">
                                <Button
                                    className="button-transparent"
                                    text="For Doctors"
                                    data-href="https://www.medlife.com/fordoctors"
                                />
                            </li>
                            <li className="partner-with-us--prescription">
                                <Button
                                    className="button-transparent"
                                    text="For Affiliates"
                                    data-href="https://www.medlife.com/affiliate"
                                />
                            </li>
                            <li className="partner-with-us--upload">
                                <Button
                                    className="button-transparent"
                                    text="For Franchise"
                                    data-href="https://www.medlife.com/affiliate"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
