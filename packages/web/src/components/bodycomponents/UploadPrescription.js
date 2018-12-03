/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Button from '../common/Button';

export default class UploadPrescription extends Component {
    render() {
        return (
            <div className="upload-prescription-container pt-2">
                <div className="upload-medicines--prescription mt-3">
                    <div className="mb-2"> Have a Prescription ?</div>
                    <Button
                        className="button-primary other-medicines--prescription-buttons-mobile"
                        text="Upload Prescription"
                        data-href="https://m.medlife.com/"
                    />
                </div>
                <div className="upload-medicines--prescription mt-3">
                    <div className="mb-2"> Don&apos;t have a Prescription ?</div>
                    <Button
                        className="button-transparent other-medicines--prescription-buttons-mobile"
                        text="GET STARTED"
                        data-href="https://m.medlife.com/#/root/norxoptions"
                    />
                </div>
            </div>
        );
    }
}
