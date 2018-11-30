import { combineReducers } from 'redux';
import LoginDucks from './LoginDucks';
import FeatureDucks from './FeatureDucks';

export default combineReducers({
    login_reducer: LoginDucks,
    feature_reducer: FeatureDucks,
});
