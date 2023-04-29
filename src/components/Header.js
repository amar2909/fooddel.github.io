import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Welcome to EatStreet!!</h1>
      <Link to="/log"></Link>
    </header>
  );
}

export default Header;
