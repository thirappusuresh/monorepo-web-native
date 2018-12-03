import React from 'react';
import { uniqueId } from 'underscore';

export default class AsyncComponent extends React.Component {
    state = {
        isLoaded: false,
        hasError: false,
        component: null,
    };

    componentWillMount() {
        const { fetchComponent } = this.props;
        fetchComponent()
            .then(({ default: C }) => {
                this.setState(p => ({
                    ...p,
                    component: C,
                    isLoaded: true,
                }));
            })
            .catch(() => {
                this.setState(p => ({
                    ...p,
                    component: null,
                    isLoaded: false,
                    hasError: true,
                }));
            });
    }

    render() {
        const { hasError, isLoaded, component } = this.state;
        const { errorRendeProp, loaderRenderProp } = this.props;

        if (hasError) {
            if (errorRendeProp) {
                const Error = errorRendeProp;

                return Error(...this.state);
            }
            return (
                <div>
                    Chunk failed to load...
                </div>
            );
        }
        if (!isLoaded) {
            if (loaderRenderProp) {
                const Loader = loaderRenderProp;

                return Loader(...this.state);
            }
            return (
                <div>
                    Loading...
                </div>
            );
        }

        const Component = component;
        return (
            <Component
                {...this.state}
                {...this.props}
            />
        );
    }
}

export function renderAsyncComponent(args) {
    return (
        <AsyncComponent key={uniqueId('async-component-wrapper-')} {...args} />
    );
}
