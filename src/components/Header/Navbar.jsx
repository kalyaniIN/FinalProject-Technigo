import { MdFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => (
  <nav>
    <div className="nav-bar">
      <div className="nav-bar-home">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-bar-brand">
        <MdFoodBank />
        <span className="nav-bar-brand-text">BalancedBites</span>
      </div>
      <div></div>
    </div>
  </nav>
);
