import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../src/components/Header';
import '../src/styles/build/app.css'; // eslint-disable-line
import NavbarContainer from '../src/components/NavbarContainer';
import BodyWrapperContainer from '../src/components/BodyWrapperContainer';
import Footer from '../src/components/Footer';
import { setFeatures as setFeaturesActionCreator } from '../src/ducks/FeatureDucks';
import "@babel/polyfill"; 
import App from '../src/components/App';

class Home extends Component {
    componentDidMount() {
        const { features, setFeatures } = this.props;
        setFeatures({ features });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <NavbarContainer />
                <App />
                <BodyWrapperContainer />
                <Footer />
            </Fragment>
        );
    }
}

Home.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
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
)(Home);
