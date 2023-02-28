import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div>
        <Link to="/" className="font-mono text-blue-700 font-semibold">
          GoalSetter
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button
              onClick={onLogout}
              to="/login"
              class="font-mono text-blue-700 font-semibold"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            {" "}
            <li>
              <Link to="/login" class="font-mono text-blue-700 font-semibold">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                class="font-mono text-blue-700 font-semibold"
              >
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
