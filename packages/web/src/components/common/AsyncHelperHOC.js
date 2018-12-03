import React from 'react';
import { isEmpty } from 'underscore';

export default function AsyncHelperHOC(Component) {
    // TODO: change the name to something specific
    return class WrappedComponent extends React.Component {
        state = {
            errors: null,
            isLoading: false,
        }

        setError = (errors) => {
            this.setState(prevState => ({
                ...prevState,
                errors,
            }));
        }

        setIsLoading = (isLoading) => {
            this.setState(prevState => ({
                ...prevState,
                isLoading,
            }));
        }

        hasErrors = () => {
            const { errors } = this.state;
            return !isEmpty(errors);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.state}
                    setError={this.setError}
                    setIsLoading={this.setIsLoading}
                    hasErrors={this.hasErrors}
                />
            );
        }
    };
}
