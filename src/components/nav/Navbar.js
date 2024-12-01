import { Link } from "react-router-dom";
import isetLogo from "../../assets/isetlogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={isetLogo} alt="iset Logo" className="logo-img" />
        <span className="logo-text">ISET KEBILI</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li> 
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/helpdesk">Help Desk</Link>
        </li>
        <li>
          <Link to="/tutorials">Tutorials</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
