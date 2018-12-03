/* eslint-disable prefer-destructuring */
/* eslint no-underscore-dangle: 0 */
/* eslint no-param-reassign: 0 */

import React from 'react';
import { Provider } from 'react-redux';
import NextApp, { Container } from 'next/app';
import createReduxStore from '../src/ducks/store';
import ScreenSizeHOC from '../src/components/common/ScreenSizeHOC';
import OfflineSupport from '../src/OfflineSupport';
import { fetchFeatures, pageLevelRedirectionClickHandler } from '../src/services/HomePageServices';

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

function init() {
    const launchChatScript = function launchChatScript(f, r) {
        window.CloudAgentChat = f;
        window[f] = window[f] || function inner(...args) {
            (window[f].s = window[f].s || []).push(args);
        };
        const scriptElement = document.createElement('script');
        const m = document.getElementsByTagName('script')[0];
        scriptElement.async = 1;
        scriptElement.src = r;
        m.parentNode.insertBefore(scriptElement, m);
        // eslint-disable-next-line no-undef
        scriptElement.addEventListener('load', () => { triggerChat(); toggleChatWindow(); }, false);
    };


    if (typeof (launchChatScript) === 'function' && !window.__is_chat_loaded__) {
        (launchChatScript)('ca', 'https://cloudagent.in/chatwidget/chat_v3_1.js');
        // eslint-disable-next-line no-undef
        ca('1233445', 'KK954bc402f488b14fd2b035866a627f4f', true);
        window.__is_chat_loaded__ = true;
    }
}

export default ScreenSizeHOC(class AppWrapper extends NextApp {
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


    componentDidMount() {
        init();
        const body = document.getElementsByTagName('body')[0];

        body.addEventListener('click', pageLevelRedirectionClickHandler);
    }

    componentWillUnmount() {
        const body = document.getElementsByTagName('body')[0];

        body.removeEventListener('click', pageLevelRedirectionClickHandler);
    }

    componentDidUpdate() {
        const chatDiv = document.getElementById('chatDiv');

        if (!chatDiv) return;

        if (this.props.width < 576) {
            chatDiv.className += ' d-none';
        } else {
            const updatedClasses = chatDiv.className.split(' ').filter(cn => cn !== 'd-none');
            chatDiv.className = updatedClasses;
        }
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
});
