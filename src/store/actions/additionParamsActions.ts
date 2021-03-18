export enum AdditionParamsActions {
  SET_LIFE_POWER = 'SET_LIFE_POWER',
  SET_EVASION = 'SET_EVASION',
  SET_ENERGY = 'SET_ENERGY',
}

export const setLifePower = (lifePower: number) => ({
  type: AdditionParamsActions.SET_LIFE_POWER,
  payload: lifePower,
});

export const setEvasion = (evasion: number) => ({
  type: AdditionParamsActions.SET_EVASION,
  payload: evasion,
});

export const setEnergy = (energy: number) => ({
  type: AdditionParamsActions.SET_ENERGY,
  payload: energy,
});
