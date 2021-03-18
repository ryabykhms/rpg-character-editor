import { AnyAction } from 'redux';
import { IBaseParamsState } from '../../types';
import { BaseParamsActions, StateActions } from '../actions';
import { defaultState } from '../defaultState';

export function baseParams(
  state: IBaseParamsState = defaultState.baseParams,
  action: AnyAction
): IBaseParamsState {
  const { payload, type } = action;
  switch (type) {
    case BaseParamsActions.SET_POWER:
      return {
        ...state,
        power: payload,
      };

    case BaseParamsActions.SET_AGILITY:
      return {
        ...state,
        agility: payload,
      };

    case BaseParamsActions.SET_INTELLECT:
      return {
        ...state,
        intellect: payload,
      };

    case BaseParamsActions.SET_CHARISMA:
      return {
        ...state,
        charisma: payload,
      };

    case StateActions.SET_STATE:
      return {
        ...payload.baseParams,
      };

    default:
      return state;
  }
}
