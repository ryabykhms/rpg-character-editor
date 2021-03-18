export enum SkillsActions {
  SET_SKILL = 'SET_SKILL',
}

export const setSkill = (skillName: string, value: number) => ({
  type: SkillsActions.SET_SKILL,
  payload: {
    skillName,
    value,
  },
});
