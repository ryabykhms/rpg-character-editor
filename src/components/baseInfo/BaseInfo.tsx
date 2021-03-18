import { useDispatch, useSelector } from 'react-redux';
import { IAppState, IBaseParamsState } from '../../types';
import { setAgility, setIntellect, setCharisma, setName, setPower } from '../../store';

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
    if (!Number.isNaN(param)) {
      dispatch(actionCreator(param));
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
        onChangeParam(event, setAgility);
        break;
      case 'intellect':
        onChangeParam(event, setIntellect);
        break;
      case 'charisma':
        onChangeParam(event, setCharisma);
        break;
    }
  };

  return (
    <div>
      <label>
        <span>Name</span>
        <input onChange={(event) => dispatch(setName(event.target.value))} value={name} />
      </label>
      <label>
        <span>Power</span>
        <input onChange={(event) => onChangeBaseParams(event, 'power')} value={power} />
      </label>
      <label>
        <span>Agility</span>
        <input onChange={(event) => onChangeBaseParams(event, 'agility')} value={agility} />
      </label>
      <label>
        <span>Intellect</span>
        <input onChange={(event) => onChangeBaseParams(event, 'intellect')} value={intellect} />
      </label>
      <label>
        <span>Charisma</span>
        <input onChange={(event) => onChangeBaseParams(event, 'charisma')} value={charisma} />
      </label>
    </div>
  );
};

export default BaseInfo;
