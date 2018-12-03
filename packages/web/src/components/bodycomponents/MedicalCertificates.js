/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const MedicalCertificateItem = ({ imgPath }) => (
    <div className="medical-certificates--category-images">
        <img alt="Category" src={imgPath} className="medical-certificates--category-image" />
    </div>
);

MedicalCertificateItem.propTypes = {
    imgPath: PropTypes.string.isRequired,
};

const MedicalCertificates = () => {
    const certificateImagePaths = [
        '../../../static/certificate-1.png',
        '../../../static/certificate-2.png',
        '../../../static/certificate-3.png',
        '../../../static/certificate-4.png',
        '../../../static/certificate-5.png',
    ];

    return (
        <div className="medical-certificates--container">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <h3 className="medical-certificates--heading">
                            Medlife Certificates
                        </h3>
                        <div className="medical-certificates--images-wrapper d-flex justify-content-center">
                            {
                                certificateImagePaths.map(imgPath => <MedicalCertificateItem key={imgPath} imgPath={imgPath} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalCertificates;
