import { action } from 'typesafe-actions';

export interface Action {
    type: string;
    payload?: {}
}

export const changePage = () => action("CHANGE_PAGE");

export const changeColor = (color: string) => action("CHSNGE_COLOR");