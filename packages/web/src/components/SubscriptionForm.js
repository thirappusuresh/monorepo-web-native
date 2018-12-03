import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSubscription } from '../services/HomePageServices';
import Button from './common/Button';
import AsyncHelperHOC from './common/AsyncHelperHOC';

class SubscriptionForm extends Component {
    state = {
        email: '',
        subscribeRequestResults: null,
        hasError: false,
    }


    componentDidMount() {
        // createSubscription();
    }


    updateField = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

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
            if (prevState.subscribeRequestResults) {
                return {
                    ...prevState,
                    subscribeRequestResults: null,
                };
            }

            return false;
        });
    }

    handleSubscriptionCheck = (e) => {
        e.preventDefault();

        const { email } = this.state;
        const { setError, setIsLoading } = this.props;
        const data = {
            email,
            source: 'medlife_corp',
        };

        setIsLoading(true);
        createSubscription(data)
            .then((subscribeRequestResults) => {
                this.setState(
                    prevState => ({
                        ...prevState,
                        email: '',
                        subscribeRequestResults,
                    }),
                    () => setIsLoading(false),
                );
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    }

    renderResponseMessage = () => {
        const { subscribeRequestResults } = this.state;
        const { hasErrors } = this.props;

        if (subscribeRequestResults && subscribeRequestResults.status) {
            return (
                <p className="text-success">
                    Subscription Succesful!
                </p>
            );
        }

        if (hasErrors()) {
            return (
                <p className="text-danger">
                    Some error occured. Please try again.
                </p>
            );
        }

        return null;
    }

    render() {
        const { email } = this.state;
        const {
            isLoading,
        } = this.props;

        return (
            <form onSubmit={this.handleSubscriptionCheck}>
                <h6 className="footer--contact-us-heading">Subscribe newsletter</h6>
                <div className="d-flex">
                    <input
                        className="footer--search"
                        type="email"
                        placeholder="email@domain"
                        name="email"
                        value={email}
                        onChange={this.updateField}
                        onFocus={this.initializeFormState}
                    />
                    <Button
                        className="button-primary footer--search-button"
                        text="subscribe"
                        btnType="submit"
                        isLoading={isLoading}
                        disabled={!email.length}
                    />
                </div>

                {this.renderResponseMessage()}

            </form>
        );
    }
}

SubscriptionForm.propTypes = {
    setError: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    hasErrors: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default AsyncHelperHOC(SubscriptionForm);
