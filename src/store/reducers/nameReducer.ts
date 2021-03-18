import { AnyAction } from 'redux';
import { NameActions, StateActions } from '../actions';
import { defaultState } from '../defaultState';

export function name(state: string = defaultState.name, action: AnyAction): string {
  const { payload, type } = action;
  switch (type) {
    case NameActions.SET_NAME:
      return payload;

    case StateActions.SET_STATE:
      return payload.name;

    default:
      return state;
  }
}
