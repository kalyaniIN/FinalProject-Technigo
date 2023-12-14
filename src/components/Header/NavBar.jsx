import { MdFoodBank } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";

import "./NavBar.css";

export const NavBar = () => {
  const { favoriteRecipeItems } = useSelector((state) => state.recipe);
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-bar-brand">
          <NavLink className="head-text" to="/">
            <MdFoodBank />
            <span className="nav-bar-brand-text">BalancedBites</span>
          </NavLink>
        </div>
        <div className="nav-bar-favorites">
          <NavContainer role="region" aria-label="Favorites">
            {favoriteRecipeItems.length >= 0 && (
              <NavLink to="/favorites">
                <FaHeart size={37} color="red"  aria-label="Favorites icon" />
                <FavoriteCount aria-live="polite" aria-atomic="true">
                  {favoriteRecipeItems.length}
                  </FavoriteCount>
              </NavLink>
            )}
          </NavContainer>
        </div>
      </div>
    </nav>
  );
};
const NavContainer = styled.div`
  // position: relative;
  // display: inline-block;
`;

const FavoriteCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  letter-spacing: 0.0178571429em;
  font-weight: 500;
  color: rgb(95, 99, 104);
  font-size: 1rem;
  margin-left: -10px;
  margin-top: 3px;
  padding: 0 0.3125rem;
  border-radius: 50%;
  border: 1px solid black;
  justify-content: center;
  min-height: 0.875rem;
  min-width: 1.25rem;
  background-color: white;
  transform: translateX(-50%);
`;
