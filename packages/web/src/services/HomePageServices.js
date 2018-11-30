/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import cities from './AllCitiesData';
import features from './FeatureToggleData';

import {
    BLOG_URI,
    TESTIMONIAL_URI,
    PINCODE_CHECK_URI,
} from './URI';

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

export function getTestimonials() {
    return axios.get(TESTIMONIAL_URI).then(res => res.data);
}

export function isPincodeIsDeliverable() {
    return axios.get(PINCODE_CHECK_URI).then(res => res.data);
}

export function fetchFeatures() {
    return Promise.resolve(features);
}
