import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../src/components/Header';
import App from '../src/components/App';
import '../src/styles/build/app.css'; // eslint-disable-line
import NavbarContainer from '../src/components/NavbarContainer';
import BodyWrapperContainer from '../src/components/BodyWrapperContainer';
import Footer from '../src/components/Footer';
import { setFeatures as setFeaturesActionCreator } from '../src/ducks/FeatureDucks';
import { SECRET_SHARED_CODE } from 'shared';
import "@babel/polyfill"; 
 
class Home extends Component {
    componentDidMount() {
        console.log('Home.componentDidMount runs only in client');
        //console.log('medlifeConst.ANALYZE', medlifeConst.ANALYZE);

        const { features, setFeatures } = this.props;
        setFeatures({ features });
        console.log('this.props.features', features);
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
)(Home);
