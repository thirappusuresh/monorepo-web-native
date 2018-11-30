/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Slider from 'react-slick';
import ScreenSizeHOC from '../common/ScreenSizeHOC';
import Prevarrow from './carousel/Prevarrow';
import Nextarrow from './carousel/Nextarrow';
import MedlifeEssentialCarouselItem from './MedlifeEssentialCarouselItem';

class MedlifeEssentials extends Component {
    getSettings = () => {
        const { width } = this.props;
        if (width < 992) {
            return {
                infinite: true,
                slidesToShow: 1,
                variableWidth: true,
            };
        }
        return {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            nextArrow: <Nextarrow />,
            prevArrow: <Prevarrow />,
        };
    }

    render() {
        const settings = this.getSettings();
        const { width } = this.props;

        return (
            <div className="medlife-essentials--container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between">
                                <h4 className="medlife-essentials--sub-heading-left">Medlife Essentials</h4>
                                <a className="medlife-essentials--view-all web-only" href="./viewallproducts">VIEW ALL</a>
                            </div>
                            <p className="medlife-essentials--short-desc web-only">
                                Herbal medication made up of completely natural ingredients. Clinically tested and approved by regulatory authorities.
                            </p>
                            {width && (
                                <Slider {...settings}>
                                    <MedlifeEssentialCarouselItem />
                                    <MedlifeEssentialCarouselItem />
                                    <MedlifeEssentialCarouselItem />
                                    <MedlifeEssentialCarouselItem />
                                    <MedlifeEssentialCarouselItem />
                                    <MedlifeEssentialCarouselItem />
                                    <MedlifeEssentialCarouselItem />
                                </Slider>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ScreenSizeHOC(MedlifeEssentials);
