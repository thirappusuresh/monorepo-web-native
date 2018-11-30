import React from 'react';

export default function AsyncHelperHOC(Component) {
    // TODO: change the name to something specific
    return class WrappedComponent extends React.Component {
        state = {
            errors: null,
            isLoading: true,
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

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.state}
                    setError={this.setError}
                    setIsLoading={this.setIsLoading}
                />
            );
        }
    };
}
