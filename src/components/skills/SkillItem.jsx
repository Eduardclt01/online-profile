import "./skills.sass"

function SkillItem(props) {
  return (
    <div className="skill-item">
      <p>{props.skill}</p>
    </div>
  );
}

export default SkillItem;
