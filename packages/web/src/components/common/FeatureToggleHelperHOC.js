import React from 'react';
import { connect } from 'react-redux';
import { findWhere } from 'underscore';
import PropTypes from 'prop-types';

const mapState = state => ({
    features: state.feature_reducer.data.features,
});

export default function FeatureToggleHelperHOC(Component, featureName) {
    function WrapperFeatureToggledComponent({ features }) {
        const feature = findWhere(features, {
            feature_name: featureName,
        });

        if (!feature || !feature.enabled || !feature.enabled === 'true') return null;

        return (
            <Component />
        );
    }

    WrapperFeatureToggledComponent.propTypes = {
        features: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                enabled: PropTypes.bool.isRequired,
            }).isRequired,
        ).isRequired,
    };

    return connect(mapState)(WrapperFeatureToggledComponent);
}
