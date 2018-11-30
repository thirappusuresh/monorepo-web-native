import { connect } from 'react-redux';
import Banner from './Banner';

const mapState = state => ({
    features: state.feature_reducer.data.features,
});

export default connect(mapState)(Banner);
