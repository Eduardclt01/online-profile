import "./button.sass"

function Button(props) {
  return (
    <div >
      <button className={`button ${props.className}`}>{props.buttonText}</button>
    </div>
  );
}

export default Button;
