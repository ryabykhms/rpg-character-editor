import { useDispatch, useSelector } from 'react-redux';
import { IAppState, IBaseParamsState } from '../../types';
import { setCharisma, setName, setPower, setAgilityAndIntellect } from '../../store';
import React from 'react';
import TextInput from '../textInput/TextInput';
import './BaseInfo.css';
import { MAX_LEVEL_NUMBER } from '../../constants';

type ActionCreator = (param: number) => { type: string; payload: number };

const BaseInfo = (props: IBaseParamsState) => {
  const dispatch = useDispatch();

  const { power, agility, intellect, charisma } = props;

  const name = useSelector((state: IAppState) => state.name);

  const onChangeParam = (
    event: React.ChangeEvent<HTMLInputElement>,
    actionCreator: ActionCreator
  ) => {
    const param = +event.target.value;
    if (!Number.isNaN(param) && param <= MAX_LEVEL_NUMBER) {
      dispatch(actionCreator(param));
    }
  };

  const onChangeAgilityIntellect = (
    event: React.ChangeEvent<HTMLInputElement>,
    param: keyof IBaseParamsState
  ) => {
    const value = +event.target.value;

    if (Number.isNaN(value) || value > MAX_LEVEL_NUMBER) {
      return;
    }

    if (param === 'agility') {
      dispatch(setAgilityAndIntellect(value, intellect));
    } else {
      dispatch(setAgilityAndIntellect(agility, value));
    }
  };

  const onChangeBaseParams = (
    event: React.ChangeEvent<HTMLInputElement>,
    param: keyof IBaseParamsState
  ) => {
    switch (param) {
      case 'power':
        onChangeParam(event, setPower);
        break;
      case 'agility':
        onChangeAgilityIntellect(event, 'agility');
        break;
      case 'intellect':
        onChangeAgilityIntellect(event, 'intellect');
        break;
      case 'charisma':
        onChangeParam(event, setCharisma);
        break;
    }
  };

  const onInputName = (name: string) => {
    dispatch(setName(name));
  };

  return (
    <div className="base-info">
      <TextInput
        className="base-info__title"
        text={name ? name : 'Name'}
        onChangeText={onInputName}
      />
      <div className="base-info__params">
        <label className="base-info__label">
          <input
            className="base-info__input"
            onChange={(event) => onChangeBaseParams(event, 'power')}
            value={power}
          />
          <span>Power</span>
        </label>
        <label className="base-info__label">
          <input
            className="base-info__input"
            onChange={(event) => onChangeBaseParams(event, 'agility')}
            value={agility}
          />
          <span>Agility</span>
        </label>
        <label className="base-info__label">
          <input
            className="base-info__input"
            onChange={(event) => onChangeBaseParams(event, 'intellect')}
            value={intellect}
          />
          <span>Intellect</span>
        </label>
        <label className="base-info__label">
          <input
            className="base-info__input"
            onChange={(event) => onChangeBaseParams(event, 'charisma')}
            value={charisma}
          />
          <span>Charisma</span>
        </label>
      </div>
    </div>
  );
};

export default BaseInfo;
