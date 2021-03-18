export const Levels = {
  0: 'Untrained',
  1: 'Newbie',
  2: 'Pupil',
  3: 'Adept',
  4: 'Expert',
  5: 'Master',
};

const levelsKeys = Object.keys(Levels);
const lastIndex = levelsKeys.length - 1;

export const MAX_LEVEL_NUMBER: number = +levelsKeys[lastIndex];

export const MAX_LIFE_POWER: number = MAX_LEVEL_NUMBER + 3;
export const MAX_EVASION: number = MAX_LEVEL_NUMBER + 10;
export const MAX_ENERGY: number = MAX_LEVEL_NUMBER * 2;
