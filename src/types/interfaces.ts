import { Levels } from '../constants';

export interface IAppState {
  name: string;
  baseParams: IBaseParamsState;
  additionParams: IAdditionParamsState;
  skills: ISkillsState;
}

export interface IBaseParamsState {
  power: keyof typeof Levels;
  agility: keyof typeof Levels;
  intellect: keyof typeof Levels;
  charisma: keyof typeof Levels;
}

export interface IAdditionParamsState {
  lifePower: number;
  evasion: number;
  energy: number;
}

export interface ISkillsState {
  [key: string]: ISkillsItemState;
}

export interface ISkillsItemState {
  base: keyof IBaseParamsState;
  value: keyof typeof Levels;
}
