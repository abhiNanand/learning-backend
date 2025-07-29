import { Link } from "react-router";
import { isLoggedIn, logout } from "../utils/auth";

export default function Home() {
  return (
    <div>
      <h1>Home Page (Shared)</h1>
      <nav>
        {!isLoggedIn() && <Link to="/login">Login</Link>}{" "}
        <Link to="/view">View</Link>{" "}
        {isLoggedIn() && <button onClick={() => { logout(); window.location.reload(); }}>Logout</button>}
      </nav>
    </div>
  );
}
