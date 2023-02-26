import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/" className="font-mono text-blue-700 font-semibold">
          GoalSetter
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login" class="font-mono text-blue-700 font-semibold">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" class="font-mono text-blue-700 font-semibold">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
