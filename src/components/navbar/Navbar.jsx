import { ReactComponent as Home } from "./../../assets/images/home.svg";
import { ReactComponent as Back } from "./../../assets/images/back.svg";
import { Link } from "react-router-dom";

import "./navbar.sass"


function Navbar(props) {
  return (
    <div className="navbar">
      <Link to={props.backPath}><Back className="navbar__item back" /></Link>
      <Link to="/"><Home className="navbar__item home" /></Link>
    </div>
  );
}

export default Navbar;
