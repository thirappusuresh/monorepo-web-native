/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { intersection } from 'underscore';

import cities from './AllCitiesData';
import features from './FeatureToggleData';

import getURI, {
    BLOG_URI,
    TESTIMONIAL_URI,
    PINCODE_CHECK_URI,
} from './URI';
import { navigate } from '../utils/NavUtils';

export function getAllCities() {
    return Promise.resolve(cities);
}

export function getBlogPosts() {
    return axios({
        url: BLOG_URI,
        adapter: jsonpAdapter,
        callbackParamName: '_jsonp',
    }).then(res => res.data);
}

export function createSubscription(data) {
    const url = getURI('SUBSCRIBE_URI');
    return axios
        .post(url, data)
        .then(res => res.data);
}

export function getTestimonials() {
    return axios.get(TESTIMONIAL_URI).then(res => res.data);
}

export function isPincodeIsDeliverable(pincode) {
    return axios.get(`${PINCODE_CHECK_URI}/${pincode}`).then(res => res.data);
}

export function fetchFeatures() {
    return Promise.resolve(features);
}

function getHrefTarget(el) {
    if (!el) return null;

    if (el.hasAttribute('data-href')) {
        return el;
    }

    return getHrefTarget(el.parentElement);
}

export function pageLevelRedirectionClickHandler(e) {
    const { target } = e;

    const targetWithHref = getHrefTarget(target);
    if (!targetWithHref) return null;

    const redirectURI = targetWithHref.getAttribute('data-href');

    if (redirectURI && redirectURI.length) navigate(redirectURI);

    return null;
}
