import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from '../../store';
import { IAppState, IBaseParamsState } from '../../types';

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

  const skillsList = Object.keys(skills).map((skill, id) => (
    <div key={id}>
      <span>{skill[0].toUpperCase() + skill.slice(1)}: </span>
      <span>{skills[skill].value} </span>
      <button
        onClick={() => {
          onTrain(skill);
        }}
      >
        Train
      </button>
    </div>
  ));

  return (
    <div>
      <hr />

      {skillsList}
    </div>
  );
};

export default Skills;
