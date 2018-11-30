/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Slider from 'react-slick';
import ScreenSizeHOC from '../common/ScreenSizeHOC';
import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';

const TopBrandsCarouselItem = () => (
    <div className="top-brands--category-heading">
        <img alt="Category" src="../../../static/topbrandlogo.jpg" className="top-brands--category-images" />
    </div>
);

class Topbrands extends Component {
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
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: false,
            nextArrow: <Nextarrow />,
            prevArrow: <Prevarrow />,
        };
    }

    render() {
        const settings = this.getSettings();

        return (
            <div className="top-brands--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <h6 className="top-brands--heading">Top Brands</h6>
                            {this.props.width &&
                                <Slider {...settings}>
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                    <TopBrandsCarouselItem />
                                </Slider>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ScreenSizeHOC(Topbrands);
