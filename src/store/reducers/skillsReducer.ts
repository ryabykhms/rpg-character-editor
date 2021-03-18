import { AnyAction } from 'redux';
import { ISkillsState } from '../../types';
import { BaseParamsActions, SkillsActions, StateActions } from '../actions';
import { defaultState } from '../defaultState';

export function skills(state: ISkillsState = defaultState.skills, action: AnyAction): ISkillsState {
  const { payload, type } = action;
  switch (type) {
    case SkillsActions.SET_SKILL:
      const { skillName, value } = payload;
      const newState = { ...state };
      newState[skillName].value = value;
      return newState;

    case BaseParamsActions.SET_POWER:
      const attackValue = payload < state.attack.value ? payload : state.attack.value;
      return {
        ...state,
        attack: {
          ...state.attack,
          value: attackValue,
        },
      };

    case BaseParamsActions.SET_AGILITY:
      const stealthValue = payload < state.stealth.value ? payload : state.stealth.value;
      const archeryValue = payload < state.archery.value ? payload : state.archery.value;
      return {
        ...state,
        stealth: {
          ...state.stealth,
          value: stealthValue,
        },
        archery: {
          ...state.archery,
          value: archeryValue,
        },
      };

    case BaseParamsActions.SET_INTELLECT:
      const learnabilityValue =
        payload < state.learnability.value ? payload : state.learnability.value;
      const survivalValue = payload < state.survival.value ? payload : state.survival.value;
      const medicineValue = payload < state.medicine.value ? payload : state.medicine.value;

      return {
        ...state,
        learnability: {
          ...state.learnability,
          value: learnabilityValue,
        },
        survival: {
          ...state.survival,
          value: survivalValue,
        },
        medicine: {
          ...state.medicine,
          value: medicineValue,
        },
      };

    case BaseParamsActions.SET_CHARISMA:
      const intimidationValue =
        payload < state.intimidation.value ? payload : state.intimidation.value;
      const insightValue = payload < state.insight.value ? payload : state.insight.value;
      const appearanceValue = payload < state.appearance.value ? payload : state.appearance.value;
      const manipulationValue =
        payload < state.manipulation.value ? payload : state.manipulation.value;

      return {
        ...state,
        intimidation: {
          ...state.intimidation,
          value: intimidationValue,
        },
        insight: {
          ...state.insight,
          value: insightValue,
        },
        appearance: {
          ...state.appearance,
          value: appearanceValue,
        },
        manipulation: {
          ...state.manipulation,
          value: manipulationValue,
        },
      };

    case StateActions.SET_STATE:
      return {
        ...payload.skills,
      };

    default:
      return state;
  }
}
