export interface IAppState {
  name: string;
  baseParams: IBaseParamsState;
  additionParams: IAdditionParamsState;
  skills: ISkillsState;
}

export interface IBaseParamsState {
  power: number;
  agility: number;
  intellect: number;
  charisma: number;
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
  base: string;
  value: number;
}
