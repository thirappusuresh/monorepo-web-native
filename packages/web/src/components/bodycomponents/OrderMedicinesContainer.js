import { connect } from 'react-redux';
import OrderMedicines from './OrderMedicines';

const mapState = state => ({
    features: state.feature_reducer.data.features,
});

export default connect(mapState)(OrderMedicines);
