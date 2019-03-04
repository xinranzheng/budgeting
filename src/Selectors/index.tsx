import { StoreState } from '../Store';

export const getHomeTitle = (state: StoreState) => state.HomepageState.title;

export const getNewTitle = (state: StoreState) => state.NewPageState.title;