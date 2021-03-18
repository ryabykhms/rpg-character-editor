import { MAX_ENERGY, MAX_EVASION, MAX_LIFE_POWER } from '../../constants';
import { IAdditionParamsState } from '../../types';
import heart from '../../images/heart.svg';
import escape from '../../images/escape.svg';
import energy from '../../images/energy.svg';
import './AdditionInfo.css';

const AdditionInfo = (props: IAdditionParamsState) => {
  return (
    <div className="addition-info">
      <div className="addition-info__item" title="Life Power">
        <img className="addition-info__img" src={heart} alt="Life Power" />
        <progress
          className="progress progress--life"
          max={MAX_LIFE_POWER}
          value={props.lifePower}
        />
      </div>
      <div className="addition-info__item" title="Evasion">
        <img className="addition-info__img" src={escape} alt="Evasion" />
        <progress className="progress progress--evasion" max={MAX_EVASION} value={props.evasion} />
      </div>
      <div className="addition-info__item" title="Energy">
        <img className="addition-info__img" src={energy} alt="Energy" />
        <progress className="progress progress--energy" max={MAX_ENERGY} value={props.energy} />
      </div>
    </div>
  );
};

export default AdditionInfo;
