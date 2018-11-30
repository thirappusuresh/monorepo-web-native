/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Slider from 'react-slick';
import ScreenSizeHOC from '../common/ScreenSizeHOC';
import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';

const ShopByCategoryCarouselItem = () => (
    <div className="shop-health-products--category-heading">
        <img alt="Category" src="../../../static/weightmanagement.jpg" className="shop-health-products--category-images" />
        <p className="shop-health-products--category-title">Weight Management</p>
    </div>
);

const ShopByConcernCarouselItem = () => (
    <div className="shop-health-products--category-heading">
        <div className="shop-health-products--image-container col-md-12">
            <img alt="Concern" src="../../../static/heart.png" className="shop-health-products--concern-images" />
        </div>
        <p className="shop-health-products--category-title">Weight Management</p>
    </div>
);

const HealthProductsData = () => (
    <ul className="col-md-12 container-720 row shop-health-products--data-container web-only">
        <li className="col-md-4">
            <h6>1 M+</h6>
            <p>Happy Customers</p>
        </li>
        <li className="col-md-4">
            <h6>12000+</h6>
            <p>Products</p>
        </li>
        <li className="col-md-4">
            <h6>100+</h6>
            <p>Categories</p>
        </li>
    </ul>
);

class ShopHealthProducts extends Component {
    getSettings = () => {
        const { width } = this.props;
        if (width < 992) {
            return {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: true,
            };
        }
        return {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: false,
            nextArrow: <Nextarrow />,
            prevArrow: <Prevarrow />,
        };
    }

    render() {
        const settings = this.getSettings();
        return (
            <div className="shop-health-products--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className="col-md-12 d-flex justify-content-center shop-health-products--heading web-only">Shop Health Products</h2>
                        <HealthProductsData />
                        <div className="col-md-12 shop-health-products--categories-wrapper">
                            <h6 className="shop-health-products--categories">Shop by Category</h6>
                            {this.props.width &&
                                <Slider {...settings}>
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                    <ShopByCategoryCarouselItem />
                                </Slider>
                            }
                        </div>
                        <div className="col-md-12 shop-health-products--concern-wrapper">
                            <h6 className="shop-health-products--categories">Shop by Concern</h6>
                            {this.props.width &&
                                <Slider {...settings}>
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                    <ShopByConcernCarouselItem />
                                </Slider>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ScreenSizeHOC(ShopHealthProducts);
