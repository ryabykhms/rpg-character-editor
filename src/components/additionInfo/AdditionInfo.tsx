import { IAdditionParamsState } from '../../types';

const AdditionInfo = (props: IAdditionParamsState) => {
  return (
    <div>
      <hr />
      <div>
        <span>Life Power:</span>
        <span>{props.lifePower}</span>
      </div>
      <div>
        <span>Evasion:</span>
        <span>{props.evasion}</span>
      </div>
      <div>
        <span>Energy:</span>
        <span>{props.energy}</span>
      </div>
    </div>
  );
};

export default AdditionInfo;
