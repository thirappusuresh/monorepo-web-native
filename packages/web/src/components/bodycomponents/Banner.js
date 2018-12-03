/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import HealthAndWellnessImage from '../../../static/banner/on_health_and_wellness_products.jpg';
import SubscribeNowImage from '../../../static/banner/subscribe_now.jpg';
import TeleConsultationImage from '../../../static/banner/tele_consultation.jpg';
import SubscribeNowImageMobile from '../../../static/banner/subscribe_now_300X130.jpg';
import HealthAndWellnessImageMobile from '../../../static/banner/on_health_and_wellness_products_300X138.jpg';
import TeleConsultationImageMobile from '../../../static/banner/tele_consultation_300X138.jpg';

import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';

const BannerhomeImage = ({ src, href }) => (
    <img data-href={href} src={src} alt="banner" style={{ height: '100%' }} />
);

BannerhomeImage.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            nextArrow: <Nextarrow />,
            prevArrow: <Prevarrow />,
        };
        return (
            <div className="carousel--full-stretch-container">
                <div className="row container">
                    <div
                        className="col-md-3 carousel--medlide-banner-space-desc-wrapper
                        d-flex justify-content-start align-items-center no-padding-x-axis web-only"
                    >
                        <div className="carousel--medlide-banner-space-desc">
                            <h2 className="carousel--desc-heading">ONE STOP</h2>
                            <h2 className="carousel--desc-heading-primary">PHARMACY</h2>
                            <h2 className="carousel--desc-text">FOR ALL YOUR HEALTH NEEDS</h2>
                        </div>
                    </div>
                    <div className="col-md-9 no-padding-x-axis carousel--banner-space">
                        <div className="web-only">
                            <Slider {...settings}>
                                <BannerhomeImage
                                    src={HealthAndWellnessImage}
                                    href="https://shop.medlife.com/"
                                />
                                <BannerhomeImage
                                    src={SubscribeNowImage}
                                    href="https://m.medlife.com/#/root/home/subscription/info?flow=subscription"
                                />
                                <BannerhomeImage
                                    src={TeleConsultationImage}
                                    href="https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true"
                                />
                            </Slider>
                        </div>
                        <div className="mobile-only">
                            <Slider {...settings}>
                                <BannerhomeImage
                                    src={HealthAndWellnessImageMobile}
                                    href="https://shop.medlife.com/"
                                />
                                <BannerhomeImage
                                    src={SubscribeNowImageMobile}
                                    href="https://m.medlife.com/#/root/home/subscription/info?flow=subscription"
                                />
                                <BannerhomeImage
                                    src={TeleConsultationImageMobile}
                                    href="https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true"
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
