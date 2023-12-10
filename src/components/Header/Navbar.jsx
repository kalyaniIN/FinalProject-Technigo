import { MdFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// import "./NavBar.css";
const Nav = styled.nav`
  background-color:rgb(244, 183, 70);
  padding: 1rem;
  width: 100%; 
  height: 60px;


  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px; /* Optionally set a max-width to center content */
    margin: 0 auto;
   
  }

  .nav-bar-brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
  }
  a{
    text-decoration: none;
    color:white;
  }

  }
`;

export const NavBar = () => (
  <Nav>
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
  </Nav>
);
