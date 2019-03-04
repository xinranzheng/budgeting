import { Action } from '../Actions';

export interface NewPageState {
    title: string;
}

export const NewPageInitialState : NewPageState = {
    title: "New Page"
}

const NewPageReducer = (state = NewPageInitialState, action: Action) => {
    return state;
};

export default NewPageReducer;