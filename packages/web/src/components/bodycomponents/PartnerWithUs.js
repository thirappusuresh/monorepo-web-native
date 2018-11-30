/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Button from '../common/Button';
import { navigate } from '../../utils/NavUtils';

export default class PartnerWithUs extends Component {
    handleForDoctors = () => {
        navigate('https://www.medlife.com/fordoctors');
    }

    handleForAffiliates = () => {
        navigate('https://www.medlife.com/affiliate');
    }

    handleForFranchise = () => {
        navigate('https://www.medlife.com/affiliate');
    }

    render() {
        return (
            <div className="partner-with-us--container web-only">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className="col-md-12 d-flex justify-content-center partner-with-us--heading">
                            Partner With Us
                        </h2>
                        <h4 className="col-md-12 d-flex justify-content-center partner-with-us--sub-heading">
                            Partner with us and grow with us in health and wealth!
                        </h4>
                        <ul className="col-md-12 container-720 d-flex justify-content-between">
                            <li className="partner-with-us--subscribe">
                                <Button
                                    className="button-transparent"
                                    text="For Doctors"
                                    onClick={this.handleForDoctors}
                                />
                            </li>
                            <li className="partner-with-us--prescription">
                                <Button
                                    className="button-transparent"
                                    text="For Affiliates"
                                    onClick={this.handleForAffiliates}
                                />
                            </li>
                            <li className="partner-with-us--upload">
                                <Button
                                    className="button-transparent"
                                    text="For Franchise"
                                    onClick={this.handleForFranchise}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
