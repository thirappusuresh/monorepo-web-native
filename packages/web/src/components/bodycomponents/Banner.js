/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Slider from 'react-slick';
import Bannerhome from '../../../static/banner.png';
import Bannerhomemobile from '../../../static/banner_mobile.png';
import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';

const BannerhomeImage = () => (
    <img src={Bannerhome} alt="banner" style={{ height: '100%' }} />
);

const BannerhomeImageMobile = () => (
    <img src={Bannerhomemobile} alt="banner" style={{ height: '100%' }} />
);

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
                            <p className="carousel--desc-heading">ONE STOP</p>
                            <p className="carousel--desc-heading-primary">PHARMACY</p>
                            <p className="carousel--desc-text">FOR ALL YOUR HEALTH NEEDS</p>
                        </div>
                    </div>
                    <div className="col-md-9 no-padding-x-axis carousel--banner-space">
                        <div className="web-only">
                            <Slider {...settings}>
                                <BannerhomeImage />
                                <BannerhomeImage />
                                <BannerhomeImage />
                                <BannerhomeImage />
                                <BannerhomeImage />
                                <BannerhomeImage />
                                <BannerhomeImage />
                            </Slider>
                        </div>
                        <div className="mobile-only">
                            <Slider {...settings}>
                                <BannerhomeImageMobile />
                                <BannerhomeImageMobile />
                                <BannerhomeImageMobile />
                                <BannerhomeImageMobile />
                                <BannerhomeImageMobile />
                                <BannerhomeImageMobile />
                                <BannerhomeImageMobile />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
