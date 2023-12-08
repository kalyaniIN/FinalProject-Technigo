import { MdFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => (
  <nav>
    <div className="nav-bar">
      <div className="nav-bar-home"></div>
      <div className="nav-bar-brand">
        <NavLink className="head-text" to="/">
          <MdFoodBank />
          <span className="nav-bar-brand-text">BalancedBites</span>
        </NavLink>
      </div>
      <div></div>
    </div>
  </nav>
);
