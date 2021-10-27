import "./experience.sass"

function ExperienceItem(props) {
  return (
    <div className="experience-item">
      
      <p className="experience-item__company">{props.companyName}</p>
      <p className="experience-item__role">{props.role}</p>
      <p className="experience-item__duration">{props.duration}</p>
  
      <p className="experience-item__description">{props.descrption}</p>

    </div>
  );
}

export default ExperienceItem;
