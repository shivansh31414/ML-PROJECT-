import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
      {/* Left side: Brand */}
      <div className="text-xl font-bold">
        <Link to="/">ML-PROJECT</Link>
      </div>

      {/* Right side: Links */}
      <div className="space-x-4">
        {!token ? (
          <>
            <Link
              to="/login"
              className="hover:bg-blue-700 px-3 py-1 rounded transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:bg-blue-700 px-3 py-1 rounded transition"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="hover:bg-blue-700 px-3 py-1 rounded transition"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
