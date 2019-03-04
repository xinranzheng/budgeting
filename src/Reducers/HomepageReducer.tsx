import { Action } from '../Actions';

export interface HomepageState {
    title: string;
}

export const HomepageInitialState : HomepageState = {
    title: "Home Page"
}

const HomepageReducer = (state = HomepageInitialState, action: Action) => {
    return state;
};

export default HomepageReducer;