import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isPincodeIsDeliverable } from '../../services/HomePageServices';
import Button from '../common/Button';
import AsyncHelperHOC from '../common/AsyncHelperHOC';

class PinCodeCheckForm extends Component {
    state = {
        pincode: '',
        errorPinCode: '',
        pincodeCheckResults: null,
        hasError: false,
    }

    updatePincodeField = (e) => {
        const { name, value } = e.target;

        if (value && !this.isValidPincode(value)) return;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    isValidPincode = (pincode = '') => !(!/^[0-9]+$/.test(pincode))

    initializeFormState = () => {
        const {
            isLoading,
            hasErrors,
            setError,
            setIsLoading,
        } = this.props;

        if (hasErrors()) {
            setError(null);
        }

        if (isLoading) {
            setIsLoading(false);
        }

        this.setState((prevState) => {
            if (prevState.pincodeCheckResults) {
                return {
                    ...prevState,
                    pincodeCheckResults: null,
                };
            }

            return false;
        });
    }

    handlePincodeCheck = (e) => {
        e.preventDefault();

        const { pincode } = this.state;
        const { setError, setIsLoading } = this.props;

        if (pincode.length < 6) return;

        setIsLoading(true);
        isPincodeIsDeliverable(pincode)
            .then((data) => {
                setError(null);
                this.setState(
                    prevState => ({
                        ...prevState,
                        pincode: '',
                        errorPinCode: '',
                        pincodeCheckResults: data,
                    }),
                    () => setIsLoading(false),
                );
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
                this.setState(prevState => ({
                    ...prevState,
                    pincode: '',
                    pincodeCheckResults: null,
                    errorPinCode: prevState.pincode,
                }));
            });
    }

    renderResponseMessage = () => {
        const { pincodeCheckResults } = this.state;
        const { hasErrors } = this.props;

        const getDuration = (city) => {
            if (city === 'Bangalore') {
                return (
                    <strong>
                        2 - 3
                    </strong>
                );
            }

            return (
                <strong>
                    5 - 6
                </strong>
            );
        };

        if (pincodeCheckResults) {
            const { city, pinCode } = pincodeCheckResults;
            const duration = getDuration(city);

            return (
                <div className="alert alert-success mt-2" role="alert">
                    Delivery to Pincode
                    {' '}
                    {pinCode}
                    {' '}
                    in next
                    {' '}
                    {duration}
                    {' '}
                    business days.
                </div>
            );
        }

        if (hasErrors()) {
            const { errorPinCode: pinCode } = this.state;

            return (
                <div className="alert alert-danger mt-2" role="alert">
                    Delivery to Pincode
                    {' '}
                    {pinCode}
                    {' '}
                    is not available.
                </div>
            );
        }

        return null;
    }

    render() {
        const { pincode } = this.state;
        const {
            isLoading,
        } = this.props;

        return (
            <form onSubmit={this.handlePincodeCheck}>
                <h4 className="cities-we-serve--check-heading">Check if we serve in your city</h4>
                <div className="d-flex">
                    <input
                        className="cities-we-serve--search"
                        type="text"
                        placeholder="Enter Pincode"
                        name="pincode"
                        value={pincode}
                        maxLength={6}
                        minLength={6}
                        onChange={this.updatePincodeField}
                    />
                    <Button
                        className="button-primary cities-we-serve--search-button"
                        text="CHECK"
                        btnType="submit"
                        isLoading={isLoading}
                        disabled={!pincode.length || pincode.length < 6}
                    />
                </div>

                {this.renderResponseMessage()}

            </form>
        );
    }
}

PinCodeCheckForm.propTypes = {
    setError: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    hasErrors: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default AsyncHelperHOC(PinCodeCheckForm);
