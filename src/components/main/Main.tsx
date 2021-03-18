import { useSelector } from 'react-redux';
import { IAppState } from '../../types';
import Actions from '../actions/Actions';
import AdditionInfo from '../additionInfo/AdditionInfo';
import BaseInfo from '../baseInfo/BaseInfo';
import Skills from '../skills/Skills';

const Main = () => {
  const baseParams = useSelector((state: IAppState) => state.baseParams);
  const { power, agility, intellect, charisma } = baseParams;

  const { lifePower, evasion, energy } = useSelector((state: IAppState) => state.additionParams);

  return (
    <main>
      <BaseInfo power={power} agility={agility} intellect={intellect} charisma={charisma} />
      <AdditionInfo lifePower={lifePower} evasion={evasion} energy={energy} />
      <Skills power={power} agility={agility} intellect={intellect} charisma={charisma} />
      <Actions />
    </main>
  );
};

export default Main;
