import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <div className="root-layout">
      <div id="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
