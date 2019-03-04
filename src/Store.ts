import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import { HomepageState } from './Reducers/HomepageReducer';
import { NewPageState } from './Reducers/NewPageReducer';

export interface StoreState {
    HomepageState: HomepageState,
    NewPageState: NewPageState
};

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;