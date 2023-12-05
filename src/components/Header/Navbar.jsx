import { MdFoodBank } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="navbar bg-orange flex align-center">
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
           
            <MdFoodBank />
            <span className="navbar-brand-text fw-7">BalancedBites</span>
           
            <div className="navbar-btns flex align-center">
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
