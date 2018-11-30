/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTint,
    faFlask,
    faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import ScreenSizeHOC from '../common/ScreenSizeHOC';
import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';
import Button from '../common/Button';


const LabTestCarouselItem = () => (
    <div className="book-lab-test--items">
        <img className="book-lab-test--items-image web-only" alt="Recent" src="../../../static/healthtest.png" />
        <div className="book-lab-test--items-details-wrapper d-flex justify-content-between">
            <div>
                <h6 className="book-lab-test--items-heading">Arogyam A</h6>
                <p className="book-lab-test--items-desc">60 Tests inc.</p>
                <img className="book-lab-test--items-logo" alt="Logo" src="../../../static/thyrocare.png" />
            </div>
            <div className="book-lab-test--prices-discount">
                <p className="book-lab-test--discount-price">&#8377;550</p>
                <div className="book-lab-test--price-and-disc">
                    <p className="book-lab-test--mrp">&#8377;1000</p>
                    <div className="book-lab-test--discount-percent">45% off</div>
                </div>
                <div className="d-flex justify-content-between mobile-only">
                    <Button className="button-primary" text="Book Now" />
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between web-only">
            <Button className="button-transparent" text="Quick View" />
            <Button className="button-primary" text="Book Now" />
        </div>

    </div>
);

const LabTestData = () => (
    <ul className="col-md-12 container-960 row book-lab-test--data-container web-only">
        <li className="col-md-4">
            <div className="book-lab-test--data-representation-icon">
                <FontAwesomeIcon icon={faTint} />
            </div>
            <p className="book-lab-test--data-representation-text">Home Sample Collection</p>
        </li>
        <li className="col-md-4">
            <div className="book-lab-test--data-representation-icon">
                <FontAwesomeIcon icon={faFlask} />
            </div>
            <p className="book-lab-test--data-representation-text">Certified Labs</p>
        </li>
        <li className="col-md-4">
            <div className="book-lab-test--data-representation-icon">
                <FontAwesomeIcon icon={faFileAlt} />
            </div>
            <p className="book-lab-test--data-representation-text">Digital Reports</p>
        </li>
    </ul>
);

class BookALabTest extends Component {
    getSettings = () => {
        const { width } = this.props;
        if (width < 992) {
            return {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            };
        }
        return {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            nextArrow: <Nextarrow />,
            prevArrow: <Prevarrow />,
        };
    }

    render() {
        const settings = this.getSettings();
        return (
            <div className="book-lab-test--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className="col-md-12 d-flex justify-content-center book-lab-test--heading web-only">Book a Lab Test</h2>
                        <LabTestData />
                        <div className="col-md-12">
                            <h6 className="book-lab-test--categories">Popular Lab Package</h6>
                            {this.props.width &&
                                <Slider {...settings}>
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                    <LabTestCarouselItem />
                                </Slider>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ScreenSizeHOC(BookALabTest);
