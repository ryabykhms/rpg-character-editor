import { AnyAction } from 'redux';
import { IAdditionParamsState } from '../../types';
import { AdditionParamsActions, BaseParamsActions, StateActions } from '../actions';
import { defaultState } from '../defaultState';

export function additionParams(
  state: IAdditionParamsState = defaultState.additionParams,
  action: AnyAction
): IAdditionParamsState {
  const { payload, type } = action;
  switch (type) {
    case AdditionParamsActions.SET_LIFE_POWER:
      return {
        ...state,
        lifePower: payload,
      };

    case AdditionParamsActions.SET_EVASION:
      return {
        ...state,
        evasion: payload,
      };

    case AdditionParamsActions.SET_ENERGY:
      return {
        ...state,
        energy: payload,
      };

    case BaseParamsActions.SET_POWER:
      return {
        ...state,
        lifePower: payload + 3,
      };

    case BaseParamsActions.SET_AGILITY:
      return {
        ...state,
        evasion: payload + 10,
      };

    case BaseParamsActions.SET_AGILITY_INTELLECT:
      return {
        ...state,
        evasion: payload.agility + 10,
        energy: payload.intellect + payload.agility,
      };

    case StateActions.SET_STATE:
      return {
        ...payload.additionParams,
      };

    default:
      return state;
  }
}
