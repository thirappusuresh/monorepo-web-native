/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import {
    faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';
import AsyncHelperHOC from '../common/AsyncHelperHOC';
import { getTestimonials } from '../../services/HomePageServices';

const LabTestCarouselItem = ({ testimonial }) => (
    <div className="testimonials--items col-md-4">
        <div className="testimonials--items-details-wrapper">
            <FontAwesomeIcon className="testimonial--quote" icon={faQuoteLeft} />
            <p className="testimonial-content">
                {testimonial.testimonial}
            </p>
            <img className="testimonial-testimonee" alt="Testimonee" src={testimonial.thumbnail_uri} />
            <h6 className="testimonial-testimonee-name">James Franko</h6>
        </div>
    </div>
);
LabTestCarouselItem.propTypes = {
    testimonial: PropTypes.shape({
        thumbnail_uri: PropTypes.string.isRequired,
        testimonial: PropTypes.string.isRequired,
    }).isRequired,
};

class Testimonials extends Component {
    state = {
        testimonials: [],
    }

    componentDidMount() {
        const { setIsLoading, setError } = this.props;
        setIsLoading(true);
        getTestimonials()
            .then((testimonials) => {
                this.setState(
                    prevState => ({
                        ...prevState,
                        testimonials,
                    }),
                    () => setIsLoading(false),
                );
            })
            .catch((e) => {
                setError(e);
                setIsLoading(false);
            });
    }

    render() {
        const { isLoading, errors } = this.props;
        return (
            <div className="testimonials--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h3 className="col-md-12 d-flex justify-content-center testimonials--heading">
                            Why Customers Love Medlife
                        </h3>
                        <div className="col-md-12 row testimonials--cards">
                            {isLoading &&
                                'Loading testimonials...'
                            }
                            {errors &&
                                'Some error occured. Please refresh'
                            }
                            {!isLoading && !errors &&
                                <React.Fragment>
                                    {
                                        this.state.testimonials.map(t => (
                                            <LabTestCarouselItem testimonial={t} key={t._id} />
                                        ))
                                    }
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Testimonials.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    errors: PropTypes.object.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
};

export default AsyncHelperHOC(Testimonials);
