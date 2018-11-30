/* eslint no-underscore-dangle: 0 */
/* eslint no-param-reassign: 0 */

import React from 'react';
import { Provider } from 'react-redux';
import NextApp, { Container } from 'next/app';
import createReduxStore from '../src/ducks/store';
import OfflineSupport from '../src/OfflineSupport';
import { fetchFeatures } from '../src/services/HomePageServices';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
    // Always make a new store if server, otherwise state is shared between requests
    if (isServer) {
        return createReduxStore(initialState);
    }

    // Create store if unavailable on the client and set it on the window object
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = createReduxStore(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}

export default class AppWrapper extends NextApp {
    static async getInitialProps(appContext) {
        const reduxStore = getOrCreateStore();
        appContext.ctx.reduxStore = reduxStore;
        const features = await fetchFeatures();

        return {
            reduxStore,
            features,
            initialReduxState: reduxStore.getState(),
        };
    }

    constructor(props) {
        super(props);
        this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
        const { Component, features } = this.props;

        const componentProps = {
            features,
        };

        return (
            <Container>
                <Provider store={this.reduxStore}>
                    <React.Fragment>
                        <Component {...componentProps} />
                        <OfflineSupport />
                    </React.Fragment>
                </Provider>
            </Container>
        );
    }
}
