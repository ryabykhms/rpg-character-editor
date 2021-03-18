import { IAppState } from '../../types';

export enum StateActions {
  SET_STATE = 'SET_STATE',
}

export const loadState = (state: IAppState) => ({
  type: StateActions.SET_STATE,
  payload: state,
});
