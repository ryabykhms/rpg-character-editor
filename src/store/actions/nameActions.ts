export enum NameActions {
  SET_NAME = 'SET_NAME',
}

export const setName = (name: string) => ({
  type: NameActions.SET_NAME,
  payload: name,
});
