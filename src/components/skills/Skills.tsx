import { useDispatch, useSelector } from 'react-redux';
import { Levels } from '../../constants';
import { setSkill } from '../../store';
import { IAppState, IBaseParamsState } from '../../types';
import './Skills.css';

const Skills = (props: IBaseParamsState) => {
  const dispatch = useDispatch();

  const skills = useSelector((state: IAppState) => state.skills);

  const onTrain = (skillName: string) => {
    const skill = skills[skillName];
    if (skill.value < props[skill.base]) {
      dispatch(setSkill(skillName, skill.value + 1));
    } else {
      dispatch(setSkill(skillName, props[skill.base]));
    }
  };

  const skillsList = Object.keys(skills).map((skill, id) => {
    const name = skill[0].toUpperCase() + skill.slice(1);
    const levelNumber: keyof typeof Levels = skills[skill].value;
    const level = Levels[levelNumber];
    return (
      <tr key={id}>
        <td>{name}: </td>
        <td>{level} </td>
        <td>
          <button
            className="button"
            onClick={() => {
              onTrain(skill);
            }}
          >
            Train
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="skills">
      <table className="skills__table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{skillsList}</tbody>
      </table>
    </div>
  );
};

export default Skills;
