import { connect } from 'react-redux';
import BodyWrapper from './BodyWrapper';

const mapState = state => ({
    features: state.feature_reducer.data.features,
});

export default connect(mapState)(BodyWrapper);
