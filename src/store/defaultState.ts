import { IAppState } from '../types';

export const defaultState: IAppState = {
  name: '',
  baseParams: {
    power: 0,
    agility: 0,
    intellect: 0,
    charisma: 0,
  },
  additionParams: {
    lifePower: 3,
    evasion: 10,
    energy: 0,
  },
  skills: {
    attack: {
      base: 'power',
      value: 0,
    },
    stealth: {
      base: 'agility',
      value: 0,
    },
    archery: {
      base: 'agility',
      value: 0,
    },
    learnability: {
      base: 'intellect',
      value: 0,
    },
    survival: {
      base: 'intellect',
      value: 0,
    },
    medicine: {
      base: 'intellect',
      value: 0,
    },
    intimidation: {
      base: 'charisma',
      value: 0,
    },
    insight: {
      base: 'charisma',
      value: 0,
    },
    appearance: {
      base: 'charisma',
      value: 0,
    },
    manipulation: {
      base: 'charisma',
      value: 0,
    },
  },
};
