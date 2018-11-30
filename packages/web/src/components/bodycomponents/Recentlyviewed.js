/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Slider from 'react-slick';
import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';

const RecentlyViewedCarouselItem = () => (
    <div className="recently-viewed--items">
        <img className="recently-viewed--items-image" alt="Recent" src="../../../static/recentcarouselimages/first.jpg" />
        <h6 className="recently-viewed--items-heading">Baconil Medicine Circumin</h6>
        <p className="recently-viewed--items-desc">Anti cancer and beauty bliss</p>
        <div className="recently-viewed--prices-discount d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
                <p className="recently-viewed--discount-price">&#8377;550</p>
                <p className="recently-viewed--mrp">&#8377;1000</p>
            </div>
            <div className="recently-viewed--discount-percent">45% off</div>
        </div>
    </div>
);

export default class Recentlyviewed extends Component {
    render() {
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            nextArrow: <Nextarrow />,
            prevArrow: <Prevarrow />,
        };
        return (
            <div className="recently-viewed--container web-only">
                <div className="container">
                    <div className="row d-flex justify-content-center recently-viewed--title-carousel-wrapper">
                        <h2 className="col-md-12 d-flex justify-content-center recently-viewed--heading">Recently Viewed</h2>
                        <div className="col-md-12">
                            <Slider {...settings}>
                                <RecentlyViewedCarouselItem />
                                <RecentlyViewedCarouselItem />
                                <RecentlyViewedCarouselItem />
                                <RecentlyViewedCarouselItem />
                                <RecentlyViewedCarouselItem />
                                <RecentlyViewedCarouselItem />
                                <RecentlyViewedCarouselItem />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
