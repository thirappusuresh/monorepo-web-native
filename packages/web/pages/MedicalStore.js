import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../src/components/MedicalPageHeader';
import '../src/styles/build/app.css'; // eslint-disable-line
import NavbarContainer from '../src/components/NavbarContainer';
import MedicineStoreBanner from '../src/components/bodycomponents/MedicineStoreBanner';
import DeliveryStrickers from '../src/components/bodycomponents/DeliverySticker';
import Footer from '../src/components/Footer';
import { setFeatures as setFeaturesActionCreator } from '../src/ducks/FeatureDucks';

class MedicalStore extends Component {
    componentDidMount() {
        const { features, setFeatures } = this.props;
        setFeatures({ features });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <NavbarContainer />
                <MedicineStoreBanner />
                <DeliveryStrickers />
                <Footer />
            </Fragment>
        );
    }
}

MedicalStore.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            enabled: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
    setFeatures: PropTypes.func.isRequired,
};

const mapDispatch = dispatch => ({
    setFeatures: features => dispatch(setFeaturesActionCreator(features)),
});

export default connect(
    null,
    mapDispatch,
)(MedicalStore);
