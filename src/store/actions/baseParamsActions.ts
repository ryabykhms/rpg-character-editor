export enum BaseParamsActions {
  SET_POWER = 'SET_POWER',
  SET_AGILITY = 'SET_AGILITY',
  SET_INTELLECT = 'SET_INTELLECT',
  SET_CHARISMA = 'SET_CHARISMA',
}

export const setPower = (power: number) => ({
  type: BaseParamsActions.SET_POWER,
  payload: power,
});

export const setAgility = (agility: number) => ({
  type: BaseParamsActions.SET_AGILITY,
  payload: agility,
});

export const setIntellect = (intellect: number) => ({
  type: BaseParamsActions.SET_INTELLECT,
  payload: intellect,
});

export const setCharisma = (charisma: number) => ({
  type: BaseParamsActions.SET_CHARISMA,
  payload: charisma,
});
