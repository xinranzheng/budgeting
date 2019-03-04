import { combineReducers } from 'redux';
import HomepageReducer from './HomepageReducer';
import NewPageReducer from './NewPageReducer';

const rootReducer = combineReducers({
    HomepageState: HomepageReducer,
    NewPageState: NewPageReducer
});

export default rootReducer;