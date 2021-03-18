import { useDispatch, useSelector } from 'react-redux';
import { loadState, setLifePower } from '../../store';
import { IAppState } from '../../types';
import './Actions.css';

const Actions = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: IAppState) => state);

  const onDamage = () => {
    if (state.additionParams.lifePower > 0) {
      dispatch(setLifePower(state.additionParams.lifePower - 1));
    }
  };

  const onSave = () => {
    localStorage.setItem('rpg_ce_person', JSON.stringify(state));
  };

  const onLoad = () => {
    const data = localStorage.getItem('rpg_ce_person');
    if (data) {
      dispatch(loadState(JSON.parse(data)));
    }
  };
  return (
    <div className="actions">
      <div className="action">
        <button className="button button--damage" onClick={onDamage}>
          Damage
        </button>
      </div>
      <div className="action">
        <button className="button button--save" onClick={onSave}>
          Save
        </button>
        <button className="button button--load" onClick={onLoad}>
          Load
        </button>
      </div>
    </div>
  );
};
export default Actions;
