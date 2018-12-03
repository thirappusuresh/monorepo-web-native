/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import UploadPrescription from './UploadPrescription';

export default class MedicineStoreBanner extends Component {
    render() {
        return (
            <div className="carousel--full-stretch-container">
                <div className="row container">
                    <div className="col-md-6 col-sm-12 no-padding-x-axis carousel--banner-space">

                        <div className="medical-store-banner-left row">
                            <div className="col-sm-12 medical-store-banner-left--label web-only"><b>MEDICAL STORE</b></div>
                            <div className="col-sm-12 medical-store-banner-left--desc web-only">
                                How to order medicines on Medlife? It&apos;s Simple.
                            </div>
                            <div className="col-sm-12 medical-store-banner-left--desc mobile-only ml-2 mt-2">
                                How to order medicines on Medlife? It&apos;s Simple.
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-sm-12 medical-store-banner-left--steps-container row web-only mb-2">
                                        <div className="medical-store-banner-left--steps col-sm-4">
                                            <div className="medical-store-banner-left--steps--left pt-1">1</div>
                                            <div className="medical-store-banner-left--steps--right ml-2">
                                                Upload
                                                <br />
                                                {' '}
                                                valid prescription
                                            </div>
                                        </div>
                                        <div className="medical-store-banner-left--steps col-sm-4">
                                            <div className="medical-store-banner-left--steps--left pt-1">2</div>
                                            <div className="medical-store-banner-left--steps--right ml-2">Recieve a confirmation call</div>
                                        </div>
                                        <div className="medical-store-banner-left--steps col-sm-4">
                                            <div className="medical-store-banner-left--steps--left pt-1">3</div>
                                            <div className="medical-store-banner-left--steps--right ml-2">
                                                Delivery
                                                <br />
                                                {' '}
                                                at your door step
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 medical-store-banner-left--steps-container row mobile-only ml-2 mb-2">
                                        <div className="medical-store-banner-left--steps col-sm-8">
                                            <div className="medical-store-banner-left--steps--left pt-1">1</div>
                                            <div className="medical-store-banner-left--steps--right ml-2">
                                                Upload
                                                <br />
                                                {' '}
                                                valid prescription
                                            </div>
                                        </div>
                                        <div className="medical-store-banner-left--steps col-sm-8">
                                            <div className="medical-store-banner-left--steps--left pt-1">2</div>
                                            <div className="medical-store-banner-left--steps--right ml-2">Recieve a confirmation call</div>
                                        </div>
                                        <div className="medical-store-banner-left--steps col-sm-8">
                                            <div className="medical-store-banner-left--steps--left pt-1">3</div>
                                            <div className="medical-store-banner-left--steps--right ml-2">
                                                Delivery
                                                <br />
                                                {' '}
                                                at your door step
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6 col-sm-12 no-padding-x-axis carousel--banner-space web-only">
                        <div className="medical-store-banner-right ">
                            <UploadPrescription />
                        </div>
                    </div>
                    <div className="col-md-12 no-padding-x-axis carousel--banner-space mobile-only">
                        <div className="upload-prescription-full-width mobile-only">
                            <UploadPrescription />
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
