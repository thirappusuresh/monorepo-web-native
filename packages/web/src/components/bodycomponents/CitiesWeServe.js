/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';

import { getAllCities, isPincodeIsDeliverable } from '../../services/HomePageServices';
import AsyncHelperHOC from '../common/AsyncHelperHOC';
import Button from '../common/Button';

class CitiesWeServe extends Component {
    state = {
        cities: [],
        pincodeFormField: '',
        pincodeCheckResults: null,
    }

    componentDidMount() {
        const { setIsLoading, setError } = this.props;
        setIsLoading(true);
        getAllCities()
            .then((cities) => {
                this.setCities(cities);
                setIsLoading(false);
            })
            .catch((errors) => {
                setError(errors);
                setIsLoading(false);
            });
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    setCities = (cities) => {
        this.setState(prevState => ({
            ...prevState,
            cities,
        }));
    }

    renderCities = () => {
        const { isLoading } = this.props;

        if (isLoading) {
            return (
                <li className="li--loading" />
            );
        }

        const { cities } = this.state;
        return cities.map((city) => {
            const listClasses = Classnames('cities-we-serve--city');
            return (
                <li className={listClasses} key={city}>
                    {city}
                </li>
            );
        });
    }

    handlePincodeCheck = () => {
        isPincodeIsDeliverable()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    pincodeCheckResults: data,
                }));
            })
            .catch((e) => {
                this.setState(prevState => ({
                    ...prevState,
                    pincodeCheckResults: e,
                }));
            });
    }

    renderContent = () => {
        const { errors } = this.props;

        if (errors) {
            return (
                <div className="d-flex justify-content-center align-items-center">
                    Some error occured. Please retry.
                </div>
            );
        }

        return (
            <div className="d-flex justify-content-center row align-items-center">
                <ul className="cities-we-serve--city-wrapper mr-auto d-flex justify-content-between col-md-9">
                    {this.renderCities()}
                    <li className="cities-we-serve--more-cities">+&nbsp; 100 CITIES</li>
                </ul>
                <div className="col-md-3 d-flex justify-content-end cities-we-serve--right">
                    <div>
                        <h4 className="cities-we-serve--check-heading">Check if we serve in your city</h4>
                        <div className="d-flex">
                            <input
                                className="cities-we-serve--search"
                                type="text"
                                placeholder="Enter Pincode"
                                maxLength="6"
                                name="pincodeFormField"
                                value={this.state.pincodeFormField}
                                onChange={this.updateField}
                            />
                            <Button
                                className="button-primary cities-we-serve--search-button"
                                text="CHECK"
                                disabled={!this.state.pincodeFormField.length}
                                onClick={this.handlePincodeCheck}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="cities-we-serve--container">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 cities-we-serve--content-wrapper">
                            <h6 className="cities-we-serve--heading">Cities We Serve</h6>
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CitiesWeServe.propTypes = {
    // TODO: shape of error object is unclear at this point. Will revisit in future.
    // eslint-disable-next-line react/forbid-prop-types
    errors: PropTypes.object,
    setError: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

CitiesWeServe.defaultProps = {
    errors: {},
};

export default AsyncHelperHOC(CitiesWeServe);
