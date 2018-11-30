import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapState = state => ({
    features: state.feature_reducer.data.features,
});

export default connect(mapState)(Navbar);
